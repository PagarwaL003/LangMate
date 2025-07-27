import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { LANGUAGES } from "../constants/index.js";
import {
  CameraIcon,
  LoaderIcon,
  MapPinIcon,
  ShipWheelIcon,
  ShuffleIcon,
} from "lucide-react";
import { completeOnboarding } from "../lib/api";

const EditProfile = () => {
  const { authUser } = useAuthUser();
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    fullName: authUser?.fullName || "",
    bio: authUser?.bio || "",
    nativeLanguage: authUser?.nativeLanguage || "",
    learningLanguage: authUser?.learningLanguage || "",
    location: authUser?.location || "",
    profilePic: authUser?.profilePic || "",
  });

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formState);
  };

  const handleRandomAvatar = () => {
    const idx = Math.floor(Math.random() * 100) + 1;
    const avatar = `https://avatar.iran.liara.run/public/${idx}.png`;
    setFormState({ ...formState, profilePic: avatar });
    toast.success("Random profile picture generated");
  };

  return (
    <div className="flex items-center justify-center max-h-screen p-4 mt-5 bg-base-100">
      <div className="w-full max-w-4xl shadow-xl card bg-base-200">
        <div className="p-6 card-body sm:p-8">
          <h1 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
            Edit Your Profile
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Left: Form Fields */}
              <div className="flex-1 space-y-6">
                {/* Full name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState({ ...formState, fullName: e.target.value })
                    }
                    className="w-full input input-bordered"
                    placeholder="Your full name"
                  />
                </div>

                {/* BIO */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    name="bio"
                    value={formState.bio}
                    onChange={(e) =>
                      setFormState({ ...formState, bio: e.target.value })
                    }
                    className="h-24 textarea textarea-bordered"
                    placeholder="Tell others about yourself and your language learning goals..."
                  />
                </div>

                {/* Languages */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Native Language */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Native Language</span>
                    </label>
                    <select
                      name="nativeLanguage"
                      value={formState.nativeLanguage}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          nativeLanguage: e.target.value,
                        })
                      }
                      className="w-full select select-bordered"
                    >
                      <option value="">Select your native language</option>
                      {LANGUAGES.map((lang) => (
                        <option key={`native-${lang}`} value={lang.toLowerCase()}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Learning Language */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Learning Language</span>
                    </label>
                    <select
                      name="learningLanguage"
                      value={formState.learningLanguage}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          learningLanguage: e.target.value,
                        })
                      }
                      className="w-full select select-bordered"
                    >
                      <option value="">Select the language you're learning</option>
                      {LANGUAGES.map((lang) => (
                        <option key={`learning-${lang}`} value={lang.toLowerCase()}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute transform -translate-y-1/2 top-1/2 left-3 size-5 text-base-content opacity-70" />
                    <input
                      type="text"
                      name="location"
                      value={formState.location}
                      onChange={(e) =>
                        setFormState({ ...formState, location: e.target.value })
                      }
                      className="w-full pl-10 input input-bordered"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full mt-4 btn btn-primary"
                  disabled={isPending}
                  type="submit"
                >
                  {!isPending ? (
                    <>
                      <ShipWheelIcon className="mr-2 size-5" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <LoaderIcon className="mr-2 size-5" />
                      Saving...
                    </>
                  )}
                </button>
              </div>

              {/* Right: Profile Image & Avatar */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-6">
                <div className="overflow-hidden rounded-full size-40 bg-base-300">
                  {formState.profilePic ? (
                    <img
                      src={formState.profilePic}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <CameraIcon className="size-12 text-base-content opacity-40" />
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleRandomAvatar}
                  className="btn btn-accent"
                >
                  <ShuffleIcon className="mr-2 size-4" />
                  Generate Random Avatar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

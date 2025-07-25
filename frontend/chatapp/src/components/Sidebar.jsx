import useauthUser from "../hooks/useauthUser";
import { Link, useLocation } from "react-router";
import { BellIcon, HomeIcon, ShipWheelIcon, UserIcon } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useauthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="sticky top-0 flex-col hidden w-64 h-screen border-r bg-base-200 border-base-300 lg:flex">
      <div className="p-5 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2.5">
          <ShipWheelIcon className="size-9 text-primary" />
          <span className="font-mono text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            LangMate
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-5 space-y-4">
        <Link
          to="/"
          className={`justify-start w-full gap-3 px-3 normal-case btn btn-ghost ${
            currentPath === "/" ? "btn-active" : ""
          }`}
        >
          <HomeIcon className="size-5 text-base-content opacity-70" />
          <span>Home</span>
        </Link>

        <Link
          to="/friends"
          className={`justify-start w-full gap-3 px-3 normal-case btn btn-ghost ${
            currentPath === "/friends" ? "btn-active" : ""
          }`}
        >
          <UserIcon className="size-5 text-base-content opacity-70" />
          <span>Friends</span>
        </Link>

        <Link
          to="/notifications"
          className={`justify-start w-full gap-3 px-3 normal-case btn btn-ghost ${
            currentPath === "/notifications" ? "btn-active" : ""
          }`}
        >
          <BellIcon className="size-5 text-base-content opacity-70" />
          <span>Notifications</span>
        </Link>
      </nav>

      {/* User profile section */}
      <div className="p-4 mt-auto border-t border-base-300">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">{authUser?.fullName}</p>
            <p className="flex items-center gap-1 text-xs text-success">
              <span className="inline-block rounded-full size-2 bg-success"/>
                Online
            </p>
          </div>
        </div>
        <Link
          to="/edit-profile"
          className="w-full mt-3 btn btn-sm btn-outline btn-primary"
        >
          Edit Profile
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

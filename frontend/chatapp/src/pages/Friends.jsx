import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard.jsx";
import NoFriendsFound from "../components/NoFriendsFound.jsx";
import { UsersIcon } from "lucide-react";

const Friends = () => {
  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <UsersIcon className="size-7 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">Your Friends</h1>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : friends.length === 0 ? (
        <NoFriendsFound />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;

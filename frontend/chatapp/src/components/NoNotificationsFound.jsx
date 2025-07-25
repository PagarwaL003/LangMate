import { BellIcon } from "lucide-react";

function NoNotificationsFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex items-center justify-center mb-4 rounded-full size-16 bg-base-300">
        <BellIcon className="size-8 text-base-content opacity-40" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">No notifications yet</h3>
      <p className="max-w-md text-base-content opacity-70">
        When you receive friend requests or messages, they'll appear here.
      </p>
    </div>
  );
}

export default NoNotificationsFound;

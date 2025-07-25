import { Link, useLocation } from "react-router";
import useauthUser from "../hooks/useauthUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
const Navbar = () => {
  const { authUser } = useauthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const queryClient = useQueryClient();

  const { mutate: logoutMutation } = useMutation({
    mutationFn: logout,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  return (
    <nav className="sticky top-0 z-30 flex items-center h-16 border-b bg-base-200 border-base-300">
      <div className="container mx-auto sm_px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO -- Only in chat page */}

          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="font-mono text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Streamify
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 ml-auto sm:gap-4">
            <Link to="/notifications">
              <button className="btn-ghost btn-circle">
                <BellIcon className="w-6 h-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          <ThemeSelector />

          <div className="avatar">
            <div className="rounded-full w-9">
              <img
                src={authUser?.profilePic}
                alt="User Avatar"
                rel="noreferrer"
              />
            </div>
          </div>

          {/* Logout Button */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={logoutMutation}
          >
            <LogOutIcon className="w-6 h-6 text-base-content opacity-70"/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

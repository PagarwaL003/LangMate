import { LoaderIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <LoaderIcon className="animate-spin size-10 text-primary" />
      <p className="mt-4 font-mono text-lg text-center">Connecting to chat...</p>
    </div>
  );
}

export default ChatLoader;
import { VideoIcon } from "lucide-react"
const CallButton = ({handleVideoCall}) => {
  return (
    <div className="absolute top-0 flex items-center justify-end w-full p-3 mx-auto border-b max-w-7xl">
        <button onClick={handleVideoCall} className="text-white btn btn-success btn-sm">
            <VideoIcon className="size-6" />
        </button>
      
    </div>
  )
};

export default CallButton

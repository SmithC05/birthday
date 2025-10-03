import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, X } from "lucide-react";

interface MusicPermissionProps {
  onAllow: () => void;
  onDeny: () => void;
}

export default function MusicPermission({ onAllow, onDeny }: MusicPermissionProps) {
  const [isAllowing, setIsAllowing] = useState(false);

  const handleAllow = () => {
    setIsAllowing(true);
    setTimeout(() => {
      onAllow();
    }, 300);
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-sm mx-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-4 animate-slide-down">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Music className="h-6 w-6 text-birthday-pink" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              Allow Background Music?
            </p>
            <p className="text-xs text-gray-600 mt-1">
              This site would like to play background music for the birthday celebration
            </p>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <Button
            onClick={onDeny}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="h-4 w-4 mr-1" />
            No Thanks
          </Button>
          <Button
            onClick={handleAllow}
            size="sm"
            className={`bg-birthday-pink hover:bg-birthday-pink/80 text-white ${
              isAllowing ? 'animate-pulse' : ''
            }`}
            disabled={isAllowing}
          >
            <Music className="h-4 w-4 mr-1" />
            {isAllowing ? 'Starting...' : 'Allow Music'}
          </Button>
        </div>
      </div>
    </div>
  );
}
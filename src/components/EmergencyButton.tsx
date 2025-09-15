import { useState } from "react";
import { AlertTriangle, Phone, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getTranslation } from "@/utils/translations";

const useDeviceFeatures = () => {
  const { toast } = useToast();

  const accessCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Create a simple capture interface
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      
      toast({
        title: "📸 Camera Activated",
        description: "Camera is ready for emergency documentation.",
      });
      
      // Stop stream after showing activation
      setTimeout(() => {
        stream.getTracks().forEach(track => track.stop());
      }, 3000);
    } catch (error) {
      toast({
        title: "Camera Access Denied",
        description: "Please allow camera permissions for emergency photos.",
        variant: "destructive",
      });
    }
  };

  const getLocation = async () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location Not Supported",
        description: "Your device doesn't support location services.",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        toast({
          title: "📍 Location Acquired",
          description: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`,
        });
      },
      (error) => {
        toast({
          title: "Location Access Denied",
          description: "Please enable location services for safety monitoring.",
          variant: "destructive",
        });
      }
    );
  };

  const makeEmergencyCall = () => {
    const emergencyNumber = "tel:100"; // Police emergency number in India
    window.location.href = emergencyNumber;
    
    toast({
      title: "📞 Emergency Call Initiated",
      description: "Connecting to emergency services...",
    });
  };

  return { accessCamera, getLocation, makeEmergencyCall };
};

interface EmergencyButtonProps {
  onEmergencyActivate?: () => void;
  currentLanguage: string;
}

const EmergencyButton = ({ onEmergencyActivate, currentLanguage }: EmergencyButtonProps) => {
  const t = (key: string) => getTranslation(key, currentLanguage);
  const [isActivated, setIsActivated] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();
  const { accessCamera, getLocation, makeEmergencyCall } = useDeviceFeatures();

  const handleEmergencyPress = () => {
    if (isActivated) return;

    setIsActivated(true);
    setCountdown(5);
    
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          activateEmergency();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Allow cancellation within countdown period
    setTimeout(() => {
      if (countdown > 0) {
        clearInterval(timer);
      }
    }, 5000);
  };

  const activateEmergency = () => {
    onEmergencyActivate?.();
    
    toast({
      title: "🚨 Emergency Alert Activated",
      description: "Location shared with authorities. Help is on the way.",
      variant: "destructive",
    });

    // Simulate emergency services notification
    setTimeout(() => {
      toast({
        title: "📍 Location Confirmed",
        description: "Emergency responders have your precise location.",
      });
    }, 2000);
  };

  const cancelEmergency = () => {
    setIsActivated(false);
    setCountdown(0);
    toast({
      title: "Emergency Cancelled",
      description: "Emergency alert has been cancelled.",
    });
  };

  return (
    <Card className="bg-gradient-emergency shadow-danger border-0 text-white">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">{t('emergencyAssistance')}</h3>
            <p className="text-sm opacity-90">24/7 Response Available</p>
          </div>
        </div>

        {/* Emergency Button */}
        <div className="text-center mb-6">
          {!isActivated ? (
              <Button
                onClick={handleEmergencyPress}
                size="lg"
                className="w-full h-16 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-xl transition-spring"
              >
                <AlertTriangle className="w-6 h-6 mr-2" />
                EMERGENCY
              </Button>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{countdown}</div>
                <p className="text-sm opacity-90">Activating emergency alert...</p>
              </div>
                <Button
                  onClick={cancelEmergency}
                  size="lg"
                  className="w-full bg-white/20 hover:bg-white/30 text-white"
                >
                  {t('cancel')}
                </Button>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={makeEmergencyCall}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={getLocation}
          >
            <MapPin className="w-4 h-4 mr-1" />
            Location
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={accessCamera}
          >
            <Camera className="w-4 h-4 mr-1" />
            Photo
          </Button>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="text-xs opacity-75 space-y-1">
            <div>Police: 100 | Medical: 108</div>
            <div>Tourist Helpline: 1363</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmergencyButton;
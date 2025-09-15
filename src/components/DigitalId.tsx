import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { getTranslation } from "@/utils/translations";

interface DigitalIdProps {
  touristName: string;
  touristId: string;
  nationality: string;
  validUntil: string;
  currentLocation: string;
  verificationStatus: "verified" | "pending" | "unverified";
  currentLanguage: string;
}

const DigitalId = ({ 
  touristName, 
  touristId, 
  nationality, 
  validUntil, 
  currentLocation, 
  verificationStatus,
  currentLanguage 
}: DigitalIdProps) => {
  const t = (key: string) => getTranslation(key, currentLanguage);
  
  const getStatusColor = () => {
    switch (verificationStatus) {
      case "verified": return "bg-safety-safe";
      case "pending": return "bg-safety-caution";
      case "unverified": return "bg-safety-danger";
      default: return "bg-muted";
    }
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case "verified": return <CheckCircle className="w-4 h-4" />;
      case "pending": return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-safety shadow-card border-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-white/20" />
        <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-white/10" />
      </div>
      
      <div className="relative p-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            <span className="text-sm font-medium opacity-90">{t('digitalTouristId')}</span>
          </div>
          <Badge 
            variant="secondary" 
            className={`${getStatusColor()} text-white border-0 shadow-sm`}
          >
            <div className="flex items-center gap-1">
              {getStatusIcon()}
              <span className="capitalize">{t('verified')}</span>
            </div>
          </Badge>
        </div>

        {/* Tourist Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">{touristName}</h2>
            <p className="text-sm opacity-80">ID: {touristId}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="opacity-70 mb-1">{t('nationality')}</p>
              <p className="font-medium">{nationality}</p>
            </div>
            <div>
              <p className="opacity-70 mb-1">{t('validUntil')}</p>
              <p className="font-medium">{validUntil}</p>
            </div>
          </div>

          {/* Current Location */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/20">
            <CheckCircle className="w-4 h-4 opacity-70" />
            <span className="text-sm opacity-90">{currentLocation}</span>
          </div>
        </div>

        {/* Blockchain Verification Badge */}
        <div className="absolute bottom-4 right-4 text-xs opacity-60">
          🔗 Blockchain Verified
        </div>
      </div>
    </Card>
  );
};

export default DigitalId;
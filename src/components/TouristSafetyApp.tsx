import { useState } from "react";
import { Globe, Settings, Bell, Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import DigitalId from "./DigitalId";
import SafetyScore from "./SafetyScore";
import EmergencyButton from "./EmergencyButton";
import QuickActions from "./QuickActions";
import DocumentsSection from "./DocumentsSection";
import { getTranslation } from "@/utils/translations";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
];

const TouristSafetyApp = () => {
  const { toast } = useToast();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [notifications, setNotifications] = useState([
    { id: "1", title: "Weather Alert", message: "Heavy rain expected in Guwahati", time: "5 min ago", type: "warning" },
    { id: "2", title: "Safety Update", message: "Your safety score has improved to 95", time: "1 hour ago", type: "success" },
    { id: "3", title: "Document Reminder", message: "Update your travel insurance", time: "2 hours ago", type: "info" }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data
  const touristData = {
    name: "Alex Johnson",
    id: "TST-2025-001247",
    nationality: "United States",
    validUntil: "March 30, 2025",
    currentLocation: "Guwahati, Assam",
    verificationStatus: "verified" as const
  };

  const safetyData = {
    score: 92,
    status: "safe" as const,
    factors: {
      location: 95,
      time: 88,
      activity: 92,
      weather: 94
    }
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    toast({
      title: "Language Changed",
      description: `Switched to ${languages.find(l => l.code === langCode)?.name}`,
    });
  };

  const handleEmergencyActivated = () => {
    console.log("Emergency activated - notifying authorities");
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const t = (key: string) => getTranslation(key, currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="bg-card shadow-card border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-safety text-white rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-bold text-foreground">{t('touristSafety')}</h1>
                <p className="text-xs text-muted-foreground">{t('northeastIndia')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={() => {
                    const nextLang = languages[(languages.findIndex(l => l.code === currentLanguage) + 1) % languages.length];
                    handleLanguageChange(nextLang.code);
                  }}
                >
                  <Globe className="w-4 h-4" />
                  {languages.find(l => l.code === currentLanguage)?.code.toUpperCase()}
                </Button>
              </div>

              {/* Notifications */}
              <div className="relative">
                <Button variant="outline" size="sm" className="relative" onClick={handleNotificationClick}>
                  <Bell className="w-4 h-4" />
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-safety-danger text-white text-xs flex items-center justify-center">
                      {notifications.length}
                    </Badge>
                  )}
                </Button>
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-card border border-border rounded-lg shadow-card z-50">
                    <div className="p-3 border-b">
                      <h3 className="font-semibold text-sm">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-muted-foreground text-sm">
                          No new notifications
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div key={notification.id} className="p-3 border-b last:border-b-0 hover:bg-muted/50">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-medium text-sm">{notification.title}</h4>
                                  <Badge 
                                    className={`px-1 py-0 text-xs ${
                                      notification.type === 'warning' 
                                        ? 'bg-safety-caution/20 text-safety-caution' 
                                        : notification.type === 'success'
                                        ? 'bg-safety-safe/20 text-safety-safe'
                                        : 'bg-primary/20 text-primary'
                                    }`}
                                  >
                                    {notification.type}
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                              </div>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-6 w-6 p-0"
                                onClick={() => removeNotification(notification.id)}
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Menu */}
              <Button variant="outline" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Status Alert */}
        <Card className="bg-safety-safe/10 border-safety-safe/20">
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-safety-safe rounded-full animate-pulse" />
              <span className="text-sm font-medium text-safety-safe">{t('allSystemsOperational')}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t('safetyMonitored')}
            </p>
          </div>
        </Card>

        {/* Digital Tourist ID */}
        <DigitalId
          touristName={touristData.name}
          touristId={touristData.id}
          nationality={touristData.nationality}
          validUntil={touristData.validUntil}
          currentLocation={touristData.currentLocation}
          verificationStatus={touristData.verificationStatus}
          currentLanguage={currentLanguage}
        />

        {/* Safety Score */}
        <SafetyScore
          score={safetyData.score}
          status={safetyData.status}
          factors={safetyData.factors}
          currentLanguage={currentLanguage}
        />

        {/* Emergency Button */}
        <EmergencyButton onEmergencyActivate={handleEmergencyActivated} currentLanguage={currentLanguage} />

        {/* Quick Actions */}
        <QuickActions currentLanguage={currentLanguage} />

        {/* Documents Section */}
        <DocumentsSection currentLanguage={currentLanguage} />

        {/* Recent Activity */}
        <Card className="shadow-card">
          <div className="p-4">
            <h3 className="font-semibold mb-3">{t('recentActivity')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t('locationUpdated')}</span>
                <span className="text-xs text-muted-foreground">2 {t('minAgo')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t('safetyCheckCompleted')}</span>
                <span className="text-xs text-muted-foreground">15 {t('minAgo')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t('idVerifiedSuccessfully')}</span>
                <span className="text-xs text-muted-foreground">1 {t('hourAgo')}</span>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default TouristSafetyApp;
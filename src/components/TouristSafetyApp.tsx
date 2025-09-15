import { useState } from "react";
import { Globe, Settings, Bell, Menu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DigitalId from "./DigitalId";
import SafetyScore from "./SafetyScore";
import EmergencyButton from "./EmergencyButton";

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
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [notifications, setNotifications] = useState(3);

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
  };

  const handleEmergencyActivated = () => {
    console.log("Emergency activated - notifying authorities");
  };

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
                <h1 className="font-bold text-foreground">Tourist Safety</h1>
                <p className="text-xs text-muted-foreground">Northeast India</p>
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
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 bg-safety-danger text-white text-xs">
                    {notifications}
                  </Badge>
                )}
              </Button>

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
              <span className="text-sm font-medium text-safety-safe">All Systems Operational</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Your safety is being monitored 24/7
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
        />

        {/* Safety Score */}
        <SafetyScore
          score={safetyData.score}
          status={safetyData.status}
          factors={safetyData.factors}
        />

        {/* Emergency Button */}
        <EmergencyButton onEmergencyActivate={handleEmergencyActivated} />

        {/* Quick Actions */}
        <Card className="shadow-card">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                <span className="text-lg">🗺️</span>
                <span className="text-xs">Safe Routes</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                <span className="text-lg">🏥</span>
                <span className="text-xs">Medical Help</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                <span className="text-lg">🚔</span>
                <span className="text-xs">Police Stations</span>
              </Button>
              <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                <span className="text-lg">ℹ️</span>
                <span className="text-xs">Tourist Info</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <div className="p-4">
            <h3 className="font-semibold mb-3">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Location updated</span>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Safety check completed</span>
                <span className="text-xs text-muted-foreground">15 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">ID verified successfully</span>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default TouristSafetyApp;
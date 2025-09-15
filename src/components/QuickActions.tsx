import { MapPin, Heart, Shield, Info, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const QuickActions = () => {
  const { toast } = useToast();

  const goaAttractions = [
    { name: "Baga Beach", coords: "15.5557,73.7516" },
    { name: "Fort Aguada", coords: "15.4971,73.7737" },
    { name: "Dudhsagar Falls", coords: "15.3144,74.3144" },
    { name: "Old Goa Churches", coords: "15.5007,73.9114" }
  ];

  const handleSafeRoutes = () => {
    const randomAttraction = goaAttractions[Math.floor(Math.random() * goaAttractions.length)];
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${randomAttraction.coords}`;
    window.open(mapsUrl, '_blank');
    
    toast({
      title: "🗺️ Safe Route to " + randomAttraction.name,
      description: "Opening Google Maps with the safest route",
    });
  };

  const handleMedicalHelp = () => {
    const medicalCenters = [
      { name: "Goa Medical College", phone: "+91-832-2458700" },
      { name: "Apollo Victor Hospital", phone: "+91-832-2540400" },
      { name: "Manipal Hospital Goa", phone: "+91-832-2570888" }
    ];
    
    const randomCenter = medicalCenters[Math.floor(Math.random() * medicalCenters.length)];
    
    toast({
      title: "🏥 " + randomCenter.name,
      description: "Tap to call: " + randomCenter.phone,
      action: (
        <Button 
          size="sm" 
          onClick={() => window.location.href = `tel:${randomCenter.phone}`}
        >
          Call Now
        </Button>
      ),
    });
  };

  const handlePoliceStations = () => {
    const policeStations = [
      { name: "Calangute Police Station", phone: "+91-832-2276307", area: "North Goa" },
      { name: "Panaji Police Station", phone: "+91-832-2225034", area: "Central Goa" },
      { name: "Margao Police Station", phone: "+91-832-2722333", area: "South Goa" }
    ];
    
    const randomStation = policeStations[Math.floor(Math.random() * policeStations.length)];
    
    toast({
      title: "🚔 " + randomStation.name,
      description: `${randomStation.area} - ${randomStation.phone}`,
      action: (
        <Button 
          size="sm" 
          onClick={() => window.location.href = `tel:${randomStation.phone}`}
        >
          Call
        </Button>
      ),
    });
  };

  const handleTouristInfo = () => {
    const touristServices = [
      { name: "Goa Tourism Helpline", phone: "1363", service: "24/7 Tourist Assistance" },
      { name: "India Tourism Goa", phone: "+91-832-2438750", service: "Official Information" },
      { name: "Tourist Police Goa", phone: "+91-832-2420016", service: "Tourist Safety" }
    ];
    
    const randomService = touristServices[Math.floor(Math.random() * touristServices.length)];
    
    toast({
      title: "ℹ️ " + randomService.name,
      description: randomService.service,
      action: (
        <Button 
          size="sm" 
          onClick={() => window.location.href = `tel:${randomService.phone}`}
        >
          Call {randomService.phone}
        </Button>
      ),
    });
  };

  return (
    <Card className="shadow-card">
      <div className="p-4">
        <h3 className="font-semibold mb-3">Quick Actions - Goa</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-auto py-3 flex-col gap-1"
            onClick={handleSafeRoutes}
          >
            <Navigation className="w-5 h-5 text-primary" />
            <span className="text-xs">Safe Routes</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex-col gap-1"
            onClick={handleMedicalHelp}
          >
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-xs">Medical Help</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex-col gap-1"
            onClick={handlePoliceStations}
          >
            <Shield className="w-5 h-5 text-blue-500" />
            <span className="text-xs">Police Stations</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-auto py-3 flex-col gap-1"
            onClick={handleTouristInfo}
          >
            <Info className="w-5 h-5 text-green-500" />
            <span className="text-xs">Tourist Info</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuickActions;
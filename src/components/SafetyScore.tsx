import { Shield, AlertTriangle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SafetyScoreProps {
  score: number;
  status: "safe" | "caution" | "danger";
  factors: {
    location: number;
    time: number;
    activity: number;
    weather: number;
  };
}

const SafetyScore = ({ score, status, factors }: SafetyScoreProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "safe":
        return {
          icon: Shield,
          color: "text-safety-safe",
          bgColor: "bg-safety-safe/10",
          shadowClass: "shadow-safe",
          title: "Safe",
          description: "All safety parameters are optimal"
        };
      case "caution":
        return {
          icon: AlertTriangle,
          color: "text-safety-caution",
          bgColor: "bg-safety-caution/10",
          shadowClass: "shadow-caution",
          title: "Caution",
          description: "Some safety factors need attention"
        };
      case "danger":
        return {
          icon: AlertCircle,
          color: "text-safety-danger",
          bgColor: "bg-safety-danger/10",
          shadowClass: "shadow-danger",
          title: "Alert",
          description: "Immediate safety action recommended"
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  const getScoreColor = () => {
    if (score >= 80) return "text-safety-safe";
    if (score >= 60) return "text-safety-caution";
    return "text-safety-danger";
  };

  const getProgressColor = () => {
    if (score >= 80) return "bg-safety-safe";
    if (score >= 60) return "bg-safety-caution";
    return "bg-safety-danger";
  };

  return (
    <Card className={`${config.shadowClass} border-0 ${config.bgColor}`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.bgColor}`}>
              <StatusIcon className={`w-5 h-5 ${config.color}`} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{config.title}</h3>
              <p className="text-sm text-muted-foreground">{config.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor()}`}>{score}</div>
            <div className="text-xs text-muted-foreground">Safety Score</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Safety</span>
            <span className="text-sm text-muted-foreground">{score}/100</span>
          </div>
          <div className="relative">
            <Progress value={score} className="h-2" />
            <div 
              className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${getProgressColor()}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        {/* Safety Factors */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground mb-3">Safety Factors</h4>
          
          {Object.entries(factors).map(([factor, value]) => (
            <div key={factor} className="flex items-center justify-between">
              <span className="text-sm capitalize text-muted-foreground">{factor}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-muted rounded-full h-1.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      value >= 80 ? 'bg-safety-safe' : 
                      value >= 60 ? 'bg-safety-caution' : 'bg-safety-danger'
                    }`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8">{value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SafetyScore;
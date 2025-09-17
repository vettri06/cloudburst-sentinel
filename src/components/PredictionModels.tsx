import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Zap, RefreshCw, Target, Activity } from "lucide-react";

const PredictionModels = () => {
  const models = [
    {
      name: "Physics-Constrained Neural Network",
      accuracy: 89,
      status: "Running",
      lastUpdate: "2 min ago",
      description: "Deep learning model with thermodynamic constraints",
      predictions: 1247,
      icon: Brain,
      confidence: 94
    },
    {
      name: "Heterogeneous Graph Network",
      accuracy: 85,
      status: "Processing",
      lastUpdate: "5 min ago",
      description: "Graph-based multi-source data integration",
      predictions: 892,
      icon: Activity,
      confidence: 91
    },
    {
      name: "Convective Transformer",
      accuracy: 92,
      status: "Active",
      lastUpdate: "1 min ago",
      description: "Specialized attention for convective processes",
      predictions: 1456,
      icon: Zap,
      confidence: 96
    },
    {
      name: "Ensemble Hybrid Model",
      accuracy: 88,
      status: "Training",
      lastUpdate: "15 min ago",
      description: "Combined physics-based and ML approach",
      predictions: 2103,
      icon: TrendingUp,
      confidence: 93
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
      case "Active":
        return "bg-success-gradient text-white";
      case "Processing":
        return "bg-sky-gradient text-white";
      case "Training":
        return "bg-alert-gradient text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const performanceMetrics = [
    { label: "Overall Accuracy", value: 89, target: 90 },
    { label: "False Alarm Reduction", value: 37, target: 35 },
    { label: "Lead Time (hours)", value: 4.2, target: 6.0 },
    { label: "Spatial Resolution (km)", value: 1.0, target: 1.0 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-storm-gradient rounded-xl p-6 text-white shadow-weather">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Prediction Models</h2>
            <p className="text-gray-200 mb-4">Advanced AI-powered cloudburst prediction system</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>4 Active Models</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>89% Avg Accuracy</span>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Models
          </Button>
        </div>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {models.map((model, index) => {
          const IconComponent = model.icon;
          return (
            <Card key={index} className="shadow-card hover:shadow-weather transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      <CardDescription>{model.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(model.status)}>
                    {model.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                    <div className="flex items-center gap-2">
                      <Progress value={model.accuracy} className="flex-1" />
                      <span className="text-sm font-semibold">{model.accuracy}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Confidence</p>
                    <div className="flex items-center gap-2">
                      <Progress value={model.confidence} className="flex-1" />
                      <span className="text-sm font-semibold">{model.confidence}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Predictions</p>
                    <p className="font-semibold">{model.predictions.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Last Update</p>
                    <p className="font-semibold">{model.lastUpdate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Metrics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Real-time model performance against target benchmarks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <span className="text-xs text-muted-foreground">
                    Target: {metric.target}{metric.label.includes("hours") || metric.label.includes("km") ? "" : "%"}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">
                      {metric.value}{metric.label.includes("hours") || metric.label.includes("km") ? "" : "%"}
                    </span>
                    <Badge variant={metric.value >= metric.target ? "default" : "secondary"}>
                      {metric.value >= metric.target ? "On Target" : "Below Target"}
                    </Badge>
                  </div>
                  <Progress 
                    value={(metric.value / metric.target) * 100} 
                    className="h-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionModels;
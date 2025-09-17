import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Thermometer, Droplets, Wind, AlertTriangle, TrendingUp } from "lucide-react";
import { useState } from "react";

const RegionalWeather = () => {
  const [selectedRegion, setSelectedRegion] = useState("maharashtra");

  const regions = [
    { id: "maharashtra", name: "Maharashtra", zones: 12 },
    { id: "kerala", name: "Kerala", zones: 8 },
    { id: "karnataka", name: "Karnataka", zones: 10 },
    { id: "tamilnadu", name: "Tamil Nadu", zones: 9 },
    { id: "gujarat", name: "Gujarat", zones: 7 }
  ];

  const regionalData = {
    maharashtra: {
      zones: [
        {
          name: "Mumbai Metropolitan",
          status: "High Risk",
          temperature: 28,
          humidity: 82,
          windSpeed: 15,
          rainfall: 45,
          prediction: "Cloudburst likely in 2-3 hours",
          confidence: 94
        },
        {
          name: "Pune Division",
          status: "Medium Risk",
          temperature: 26,
          humidity: 75,
          windSpeed: 12,
          rainfall: 25,
          prediction: "Heavy rainfall expected",
          confidence: 87
        },
        {
          name: "Nashik Region",
          status: "Low Risk",
          temperature: 29,
          humidity: 68,
          windSpeed: 8,
          rainfall: 10,
          prediction: "Scattered showers possible",
          confidence: 72
        },
        {
          name: "Aurangabad Zone",
          status: "Normal",
          temperature: 31,
          humidity: 62,
          windSpeed: 6,
          rainfall: 5,
          prediction: "Clear weather conditions",
          confidence: 89
        }
      ]
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "High Risk":
        return "bg-alert-gradient text-white";
      case "Medium Risk":
        return "bg-yellow-500 text-white";
      case "Low Risk":
        return "bg-blue-500 text-white";
      case "Normal":
        return "bg-success-gradient text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const currentRegionData = regionalData[selectedRegion as keyof typeof regionalData] || regionalData.maharashtra;

  const overallStats = {
    totalZones: currentRegionData.zones.length,
    highRisk: currentRegionData.zones.filter(z => z.status === "High Risk").length,
    mediumRisk: currentRegionData.zones.filter(z => z.status === "Medium Risk").length,
    normal: currentRegionData.zones.filter(z => z.status === "Normal").length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-sky-gradient rounded-xl p-6 text-white shadow-weather">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Regional Weather Monitoring</h2>
            <p className="text-blue-100">Zone-wise weather analysis and forecasting</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-blue-100">Active Regions</p>
              <p className="text-xl font-bold">{regions.length}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">Monitoring Zones</p>
              <p className="text-xl font-bold">{overallStats.totalZones}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-64 bg-white/20 border-white/30 text-white">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.id} value={region.id}>
                  {region.name} ({region.zones} zones)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <MapPin className="w-4 h-4 mr-2" />
            View Map
          </Button>
        </div>
      </div>

      {/* Regional Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Zones</p>
                <p className="text-2xl font-bold">{overallStats.totalZones}</p>
              </div>
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">High Risk</p>
                <p className="text-2xl font-bold text-red-500">{overallStats.highRisk}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Medium Risk</p>
                <p className="text-2xl font-bold text-yellow-500">{overallStats.mediumRisk}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Normal</p>
                <p className="text-2xl font-bold text-green-500">{overallStats.normal}</p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Zone Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentRegionData.zones.map((zone, index) => (
          <Card key={index} className="shadow-card hover:shadow-weather transition-smooth">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{zone.name}</CardTitle>
                  <CardDescription>Real-time monitoring and predictions</CardDescription>
                </div>
                <Badge className={getStatusColor(zone.status)}>
                  {zone.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Weather Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Temperature</p>
                    <p className="font-semibold">{zone.temperature}°C</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Humidity</p>
                    <p className="font-semibold">{zone.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Wind Speed</p>
                    <p className="font-semibold">{zone.windSpeed} km/h</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Rainfall</p>
                    <p className="font-semibold">{zone.rainfall} mm/h</p>
                  </div>
                </div>
              </div>

              {/* Prediction */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Prediction</p>
                  <Badge variant="outline">
                    {zone.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{zone.prediction}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button size="sm" variant="default" className="flex-1">
                  Generate Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegionalWeather;
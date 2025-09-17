import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Thermometer, Droplets, Wind, Eye, Gauge, Cloud } from "lucide-react";

const WeatherDashboard = () => {
  const currentWeather = {
    temperature: 28,
    humidity: 75,
    windSpeed: 12,
    visibility: 8.5,
    pressure: 1013,
    cloudCover: 65,
    conditions: "Partly Cloudy",
    location: "Mumbai, India"
  };

  const hourlyForecast = [
    { time: "12:00", temp: 28, rain: 20 },
    { time: "13:00", temp: 29, rain: 35 },
    { time: "14:00", temp: 30, rain: 45 },
    { time: "15:00", temp: 31, rain: 60 },
    { time: "16:00", temp: 29, rain: 80 },
    { time: "17:00", temp: 27, rain: 90 },
  ];

  const metrics = [
    { icon: Thermometer, label: "Temperature", value: `${currentWeather.temperature}°C`, color: "text-orange-500" },
    { icon: Droplets, label: "Humidity", value: `${currentWeather.humidity}%`, color: "text-blue-500" },
    { icon: Wind, label: "Wind Speed", value: `${currentWeather.windSpeed} km/h`, color: "text-gray-500" },
    { icon: Eye, label: "Visibility", value: `${currentWeather.visibility} km`, color: "text-green-500" },
    { icon: Gauge, label: "Pressure", value: `${currentWeather.pressure} hPa`, color: "text-purple-500" },
    { icon: Cloud, label: "Cloud Cover", value: `${currentWeather.cloudCover}%`, color: "text-gray-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-sky-gradient rounded-xl p-6 text-white shadow-weather">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">{currentWeather.location}</h2>
            <p className="text-blue-100 mb-4">Current Weather Conditions</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">{currentWeather.temperature}°C</span>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {currentWeather.conditions}
              </Badge>
            </div>
          </div>
          <Cloud className="w-16 h-16 text-blue-100" />
        </div>
      </div>

      {/* Weather Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="shadow-card hover:shadow-weather transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Hourly Forecast */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Hourly Forecast</CardTitle>
          <CardDescription>Temperature and precipitation probability for the next 6 hours</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hourlyForecast.map((hour, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                <p className="text-sm text-muted-foreground mb-2">{hour.time}</p>
                <p className="text-lg font-semibold mb-2">{hour.temp}°C</p>
                <div className="space-y-1">
                  <Progress value={hour.rain} className="h-2" />
                  <p className="text-xs text-muted-foreground">{hour.rain}% rain</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Real-time monitoring system health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Data Collection</span>
              <Badge className="bg-success-gradient text-white">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Model Processing</span>
              <Badge className="bg-success-gradient text-white">Running</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Alert System</span>
              <Badge className="bg-success-gradient text-white">Online</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
            <CardDescription>Active monitoring stations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Weather Stations</span>
              <span className="font-semibold">247 Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Radar Networks</span>
              <span className="font-semibold">12 Online</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Satellite Data</span>
              <span className="font-semibold">Real-time</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDashboard;
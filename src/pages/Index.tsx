import { useState } from "react";
import Navigation from "@/components/Navigation";
import WeatherDashboard from "@/components/WeatherDashboard";
import AlertSystem from "@/components/AlertSystem";
import RegionalWeather from "@/components/RegionalWeather";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, Zap } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <WeatherDashboard />;
      case "forecasting":
        return <WeatherDashboard />;
      case "alerts":
        return <AlertSystem />;
      case "regional":
        return <RegionalWeather />;
      default:
        return <WeatherDashboard />;
    }
  };

  if (activeSection === "dashboard") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* Hero Section */}
        <div className="bg-sky-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                CloudGuard AI
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Revolutionary hybrid prediction system for accurate cloudburst forecasting with advanced deep learning and physics-based atmospheric modeling
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="bg-white/10 border-white/20 text-white shadow-weather">
                  <CardContent className="p-6 text-center">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-lg font-semibold mb-2">AI-Powered Prediction</h3>
                    <p className="text-blue-100 text-sm">Advanced neural networks with physics constraints</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 text-white shadow-weather">
                  <CardContent className="p-6 text-center">
                    <Cloud className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
                    <p className="text-blue-100 text-sm">1km×1km resolution with 5-minute updates</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 text-white shadow-weather">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-lg font-semibold mb-2">Early Warning</h3>
                    <p className="text-blue-100 text-sm">2-6 hour advance warning capabilities</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default Index;

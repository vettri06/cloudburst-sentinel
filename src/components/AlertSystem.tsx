import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle, Bell, MapPin, Clock, Phone, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const AlertSystem = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(true);

  const activeAlerts = [
    {
      id: 1,
      level: "High",
      type: "Cloudburst Warning",
      location: "Mumbai Central",
      time: "2 hours",
      confidence: 94,
      description: "Severe cloudburst conditions predicted with >100mm/hour rainfall",
      coordinates: "19.0176° N, 72.8562° E"
    },
    {
      id: 2,
      level: "Medium",
      type: "Heavy Rainfall",
      location: "Pune East",
      time: "4 hours",
      confidence: 87,
      description: "Heavy rainfall expected with 60-80mm/hour intensity",
      coordinates: "18.5204° N, 73.8567° E"
    },
    {
      id: 3,
      level: "Low",
      type: "Weather Watch",
      location: "Nashik Region",
      time: "6 hours",
      confidence: 76,
      description: "Atmospheric conditions favorable for intense precipitation",
      coordinates: "19.9975° N, 73.7898° E"
    }
  ];

  const alertHistory = [
    {
      time: "14:30",
      location: "Thane",
      type: "Resolved",
      description: "Cloudburst warning cleared - conditions normalized"
    },
    {
      time: "12:45",
      location: "Navi Mumbai",
      type: "Issued",
      description: "Heavy rainfall alert activated"
    },
    {
      time: "11:20",
      location: "Kalyan",
      type: "Updated",
      description: "Alert level upgraded to high risk"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-alert-gradient text-white";
      case "Medium":
        return "bg-yellow-500 text-white";
      case "Low":
        return "bg-blue-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes("Resolved")) return "text-green-500";
    if (type.includes("Issued")) return "text-red-500";
    return "text-yellow-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-alert-gradient rounded-xl p-6 text-white shadow-alert">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Alert System</h2>
            <p className="text-orange-100 mb-4">Automatic cloudburst warning and notification system</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>{activeAlerts.length} Active Alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                <span>Real-time Monitoring</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>System Status:</span>
            <Badge className="bg-white/20 text-white border-white/30">
              {alertsEnabled ? "Active" : "Disabled"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Alert Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Alert Configuration</CardTitle>
          <CardDescription>Configure notification preferences and alert thresholds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Master Alert System</h4>
              <p className="text-sm text-muted-foreground">Enable/disable all alert notifications</p>
            </div>
            <Switch 
              checked={alertsEnabled} 
              onCheckedChange={setAlertsEnabled}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">SMS Alerts</p>
                  <p className="text-sm text-muted-foreground">Text message notifications</p>
                </div>
              </div>
              <Switch 
                checked={smsAlerts} 
                onCheckedChange={setSmsAlerts}
                disabled={!alertsEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email Alerts</p>
                  <p className="text-sm text-muted-foreground">Email notifications</p>
                </div>
              </div>
              <Switch 
                checked={emailAlerts} 
                onCheckedChange={setEmailAlerts}
                disabled={!alertsEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Browser notifications</p>
                </div>
              </div>
              <Switch 
                checked={pushAlerts} 
                onCheckedChange={setPushAlerts}
                disabled={!alertsEnabled}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Alerts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Active Alerts</CardTitle>
          <CardDescription>Current weather warnings and predictions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeAlerts.map((alert) => (
            <div key={alert.id} className="p-4 rounded-lg border border-border hover:shadow-card transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{alert.type}</h4>
                      <Badge className={getLevelColor(alert.level)}>
                        {alert.level} Risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Confidence: {alert.confidence}%</p>
                  <p className="text-xs text-muted-foreground">Lead time: {alert.time}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{alert.location}</span>
                  <span className="text-xs text-muted-foreground">({alert.coordinates})</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="default">
                    Send Alert
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Alert History */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Alert history and system activity log</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertHistory.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{event.location}</span>
                    <Badge variant="outline" className={getTypeIcon(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertSystem;
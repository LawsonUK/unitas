import { Card, CardContent } from '@/components/ui/card';
import { Thermometer, Droplets, Zap, Users } from 'lucide-react';

export default function SecondaryMetrics() {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Temperature</p>
                            <p className="text-2xl font-bold">24°C</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Humidity</p>
                            <p className="text-2xl font-bold">65%</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Power Status</p>
                            <p className="text-2xl font-bold text-green-600">Online</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Total Birds</p>
                            <p className="text-2xl font-bold">5,240</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 
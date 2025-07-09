import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Package, AlertTriangle, DollarSign } from 'lucide-react';

export default function QuickActions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Daily Check</p>
                            <p className="text-xs text-muted-foreground">Health & production</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                        <Package className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Order Feed</p>
                            <p className="text-xs text-muted-foreground">Inventory low</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                        <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Health Report</p>
                            <p className="text-xs text-muted-foreground">Ill birds detected</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Sales Report</p>
                            <p className="text-xs text-muted-foreground">Weekly summary</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
} 
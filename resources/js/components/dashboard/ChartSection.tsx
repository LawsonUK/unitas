import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { 
    ChartContainer, 
    ChartTooltip, 
    ChartLegend,
    ChartLegendContent
} from '@/components/ui/chart';
import { Activity } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

interface WeeklyData {
    day: string;
    eggs: number;
    illBirds: number;
}

interface Alert {
    id: number;
    type: string;
    message: string;
    time: string;
}

interface ChartSectionProps {
    weeklyData: WeeklyData[];
    alerts: Alert[];
}

const chartConfig = {
    eggs: {
        label: "Egg Production",
        color: "#df386f",
    },
    illBirds: {
        label: "Ill Birds",
        color: "#ef4444",
    },
};

const getAlertBadgeVariant = (type: string) => {
    switch (type) {
        case 'warning':
            return 'destructive';
        case 'info':
            return 'default';
        case 'success':
            return 'secondary';
        default:
            return 'outline';
    }
};

export default function ChartSection({ weeklyData, alerts }: ChartSectionProps) {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {/* Weekly Performance Chart */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Weekly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <AreaChart data={weeklyData}>
                            <defs>
                                <linearGradient id="eggs" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#df386f" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#df386f" stopOpacity={0.1}/>
                                </linearGradient>
                                <linearGradient id="illBirds" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                                dataKey="day" 
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis 
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12 }}
                            />
                            <ChartTooltip
                                content={({ active, payload, label }) => {
                                    if (!active || !payload?.length) return null;
                                    
                                    return (
                                        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 min-w-[200px]">
                                            <div className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-2">
                                                {label}
                                            </div>
                                            <div className="space-y-1">
                                                {payload.map((entry: any, index: number) => (
                                                    <div key={index} className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <div 
                                                                className="w-3 h-3 rounded-full" 
                                                                style={{ backgroundColor: entry.color }}
                                                            />
                                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                                {entry.dataKey === 'eggs' ? 'Egg Production' : 'Ill Birds'}
                                                            </span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                            {entry.value?.toLocaleString()}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }}
                            />
                            <ChartLegend
                                content={({ payload }) => (
                                    <ChartLegendContent payload={payload} />
                                )}
                            />
                            <Area
                                type="monotone"
                                dataKey="eggs"
                                stroke="#df386f"
                                fill="url(#eggs)"
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="illBirds"
                                stroke="#ef4444"
                                fill="url(#illBirds)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {alerts.map((alert) => (
                            <div key={alert.id} className="flex items-start gap-3">
                                <Badge variant={getAlertBadgeVariant(alert.type)} className="mt-0.5">
                                    {alert.type}
                                </Badge>
                                <div className="flex-1">
                                    <p className="text-sm">{alert.message}</p>
                                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 
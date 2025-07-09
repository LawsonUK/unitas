import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Egg, AlertTriangle, Package } from 'lucide-react';

interface StatsData {
    dailyEggProduction: {
        current: number;
        previous: number;
        change: number;
        trend: string;
        unit: string;
    };
    illBirds: {
        current: number;
        previous: number;
        change: number;
        trend: string;
        unit: string;
    };
    feedInventory: {
        current: number;
        previous: number;
        change: number;
        trend: string;
        unit: string;
    };
}

interface StatsCardsProps {
    stats: StatsData;
}

const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
};

const getTrendColor = (trend: string, change: number) => {
    if (trend === 'up') {
        return change > 0 ? 'text-green-600' : 'text-red-600';
    }
    return change < 0 ? 'text-green-600' : 'text-red-600';
};

export default function StatsCards({ stats }: StatsCardsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {/* Daily Egg Production */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Daily Egg Production</CardTitle>
                    <Egg className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.dailyEggProduction.current.toLocaleString()}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {getTrendIcon(stats.dailyEggProduction.trend) && 
                            React.createElement(getTrendIcon(stats.dailyEggProduction.trend), {
                                className: `h-3 w-3 ${getTrendColor(stats.dailyEggProduction.trend, stats.dailyEggProduction.change)}`
                            })
                        }
                        <span className={getTrendColor(stats.dailyEggProduction.trend, stats.dailyEggProduction.change)}>
                            {stats.dailyEggProduction.change > 0 ? '+' : ''}{stats.dailyEggProduction.change}%
                        </span>
                        <span>from yesterday</span>
                    </div>
                </CardContent>
            </Card>

            {/* Ill Birds */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ill Birds</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.illBirds.current}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {getTrendIcon(stats.illBirds.trend) && 
                            React.createElement(getTrendIcon(stats.illBirds.trend), {
                                className: `h-3 w-3 ${getTrendColor(stats.illBirds.trend, stats.illBirds.change)}`
                            })
                        }
                        <span className={getTrendColor(stats.illBirds.trend, stats.illBirds.change)}>
                            {stats.illBirds.change > 0 ? '+' : ''}{stats.illBirds.change}%
                        </span>
                        <span>from yesterday</span>
                    </div>
                </CardContent>
            </Card>

            {/* Feed Inventory */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Feed Inventory</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats.feedInventory.current}%</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {getTrendIcon(stats.feedInventory.trend) && 
                            React.createElement(getTrendIcon(stats.feedInventory.trend), {
                                className: `h-3 w-3 ${getTrendColor(stats.feedInventory.trend, stats.feedInventory.change)}`
                            })
                        }
                        <span className={getTrendColor(stats.feedInventory.trend, stats.feedInventory.change)}>
                            {stats.feedInventory.change > 0 ? '+' : ''}{stats.feedInventory.change}%
                        </span>
                        <span>from yesterday</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 
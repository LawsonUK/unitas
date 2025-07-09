import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import StatsCards from '@/components/dashboard/StatsCards';
import SecondaryMetrics from '@/components/dashboard/SecondaryMetrics';
import ChartSection from '@/components/dashboard/ChartSection';
import QuickActions from '@/components/dashboard/QuickActions';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Mock data for poultry farming dashboard
const mockStats = {
    dailyEggProduction: {
        current: 2847,
        previous: 2750,
        change: 3.5,
        trend: 'up',
        unit: 'eggs'
    },
    illBirds: {
        current: 12,
        previous: 8,
        change: 50,
        trend: 'up',
        unit: 'birds'
    },
    feedInventory: {
        current: 85,
        previous: 92,
        change: -7.6,
        trend: 'down',
        unit: '%'
    }
};

const mockWeeklyData = [
    { day: 'Mon', eggs: 2850, illBirds: 180 },
    { day: 'Tue', eggs: 2875, illBirds: 150 },
    { day: 'Wed', eggs: 2840, illBirds: 200 },
    { day: 'Thu', eggs: 2890, illBirds: 120 },
    { day: 'Fri', eggs: 2750, illBirds: 450 },
    { day: 'Sat', eggs: 2680, illBirds: 580 },
    { day: 'Sun', eggs: 2720, illBirds: 520 },
];

const mockAlerts = [
    { id: 1, type: 'warning', message: 'Feed inventory below 20% threshold', time: '2 hours ago' },
    { id: 2, type: 'info', message: 'Vaccination schedule due tomorrow', time: '4 hours ago' },
    { id: 3, type: 'success', message: 'Daily health check completed', time: '6 hours ago' },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 overflow-x-auto">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">Farm Dashboard</h1>
                    <p className="text-muted-foreground">
                        Monitor your poultry farm's key metrics and performance
                    </p>
                </div>

                {/* Main Statistics Cards */}
                <StatsCards stats={mockStats} />

                {/* Secondary Metrics */}
                <SecondaryMetrics />

                {/* Chart Section */}
                <ChartSection weeklyData={mockWeeklyData} alerts={mockAlerts} />

                {/* Quick Actions */}
                <QuickActions />
            </div>
        </AppLayout>
    );
}

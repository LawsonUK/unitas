import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus, Edit, Trash2, Calendar, Clock } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Forms',
        href: '/forms',
    },
];

// Mock data for poultry farm forms
const mockForms = [
    {
        id: 1,
        name: 'Daily Health Check',
        description: 'Daily inspection of bird health, feed consumption, and water quality',
        frequency: 'Daily',
        createdOn: '2024-01-15',
        updatedOn: '2024-01-20',
    },
    {
        id: 2,
        name: 'Weekly Maintenance Checklist',
        description: 'Weekly equipment maintenance, cleaning schedules, and facility checks',
        frequency: 'Weekly',
        createdOn: '2024-01-10',
        updatedOn: '2024-01-18',
    },
    {
        id: 3,
        name: 'Monthly Production Report',
        description: 'Monthly egg production, mortality rates, and feed efficiency tracking',
        frequency: 'Monthly',
        createdOn: '2024-01-05',
        updatedOn: '2024-01-25',
    },
    {
        id: 4,
        name: 'Biosecurity Protocol',
        description: 'Daily biosecurity measures, visitor logs, and disinfection procedures',
        frequency: 'Daily',
        createdOn: '2024-01-12',
        updatedOn: '2024-01-19',
    },
    {
        id: 5,
        name: 'Feed Inventory Management',
        description: 'Weekly feed stock monitoring, ordering schedules, and cost tracking',
        frequency: 'Weekly',
        createdOn: '2024-01-08',
        updatedOn: '2024-01-22',
    },
    {
        id: 6,
        name: 'Vaccination Schedule',
        description: 'Monthly vaccination records, medication logs, and health protocols',
        frequency: 'Monthly',
        createdOn: '2024-01-03',
        updatedOn: '2024-01-17',
    },
];

const getFrequencyBadgeVariant = (frequency: string) => {
    switch (frequency) {
        case 'Daily':
            return 'destructive';
        case 'Weekly':
            return 'default';
        case 'Monthly':
            return 'secondary';
        default:
            return 'outline';
    }
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

export default function Forms() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Forms" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Header with Create Button */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Forms</h1>
                        <p className="text-muted-foreground">
                            Manage your daily, weekly, and monthly farm maintenance forms
                        </p>
                    </div>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Create New Form
                    </Button>
                </div>

                {/* Forms Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Forms</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                                        <th className="pb-3 pl-4 pr-3 font-medium">Form Name</th>
                                        <th className="pb-3 px-3 font-medium">Description</th>
                                        <th className="pb-3 px-3 font-medium">Frequency</th>
                                        <th className="pb-3 px-3 font-medium">Created On</th>
                                        <th className="pb-3 px-3 font-medium">Updated On</th>
                                        <th className="pb-3 pl-3 pr-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {mockForms.map((form) => (
                                        <tr key={form.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="py-4 pl-4 pr-3 font-medium">
                                                {form.name}
                                            </td>
                                            <td className="py-4 px-3 text-muted-foreground">
                                                {form.description}
                                            </td>
                                            <td className="py-4 px-3">
                                                <Badge variant={getFrequencyBadgeVariant(form.frequency)}>
                                                    {form.frequency}
                                                </Badge>
                                            </td>
                                            <td className="py-4 px-3 text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {formatDate(form.createdOn)}
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {formatDate(form.updatedOn)}
                                                </div>
                                            </td>
                                            <td className="py-4 pl-3 pr-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        title="Edit form"
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                                        title="Delete form"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

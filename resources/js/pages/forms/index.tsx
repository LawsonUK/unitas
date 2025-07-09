import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, router } from '@inertiajs/react';
import { Plus, Edit, Trash2, Calendar, Clock, CheckCircle2Icon, AlertCircleIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Forms',
        href: '/forms',
    },
];

// Get forms from the database via Inertia props
interface PageProps {
    forms: Array<{
        id: number;
        name: string;
        description: string;
        frequency: string;
        created_at: string;
        updated_at: string;
    }>;
}

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
    const { forms } = usePage<PageProps>().props;
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    // Auto-dismiss alert after 3 seconds
    useEffect(() => {
        if (alert) {
            const timeout = setTimeout(() => setAlert(null), 3000);
            return () => clearTimeout(timeout);
        }
    }, [alert]);

    const handleDelete = async () => {
        if (!deleteId) return;
        setIsDeleting(true);
        router.delete(`/forms/${deleteId}`, {
            onSuccess: () => {
                setAlert({ type: 'success', message: 'Form deleted successfully' });
                setDeleteId(null);
            },
            onError: () => {
                setAlert({ type: 'error', message: 'Failed to delete form' });
            },
            onFinish: () => {
                setIsDeleting(false);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Forms" />
            {alert && (
                <div className="fixed top-6 right-6 z-50 min-w-[260px] max-w-xs">
                    <Alert
                        variant={alert.type === 'error' ? 'destructive' : 'default'}
                        className="shadow-lg bg-white dark:bg-gray-600 border border-gray-200 dark:border-gray-600"
                    >
                        {alert.type === 'error' ? (
                            <AlertCircleIcon className="h-5 w-5 text-destructive" />
                        ) : (
                            <CheckCircle2Icon className="h-5 w-5 text-green-600" />
                        )}
                        <AlertTitle>{alert.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
                        <AlertDescription className="dark:text-white">{alert.message}</AlertDescription>
                    </Alert>
                </div>
            )}
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Header with Create Button */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Forms</h1>
                        <p className="text-muted-foreground">
                            Manage your daily, weekly, and monthly farm maintenance forms
                        </p>
                    </div>
                    <Button className="gap-2" asChild>
                        <Link href="/forms/create">
                            <Plus className="h-4 w-4" />
                            Create New Form
                        </Link>
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
                                    {forms.map((form) => (
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
                                                    {formatDate(form.created_at)}
                                                </div>
                                            </td>
                                            <td className="py-4 px-3 text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    {formatDate(form.updated_at)}
                                                </div>
                                            </td>
                                            <td className="py-4 pl-3 pr-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        title="Edit form"
                                                        asChild
                                                    >
                                                        <Link href={`/forms/${form.id}/edit`}>
                                                            <Edit className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                                        title="Delete form"
                                                        onClick={() => setDeleteId(form.id)}
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
            {/* Delete Confirmation Modal */}
            <Dialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <DialogContent aria-describedby="delete-description">
                    <DialogHeader>
                        <DialogTitle>Delete Form</DialogTitle>
                    </DialogHeader>
                    <p id="delete-description">Are you sure you want to delete this form? This action cannot be undone.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteId(null)} disabled={isDeleting}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </AppLayout>
    );
}

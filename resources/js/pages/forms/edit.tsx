import React, { useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { Link } from '@inertiajs/react';
import FormElementPalette from '@/components/forms/FormElementPalette';
import FormCanvas from '@/components/forms/FormCanvas';
import { type FormElement, type FormData } from '@/types/forms';
import { type PageProps as InertiaPageProps } from '@inertiajs/core';

interface PageProps extends InertiaPageProps {
    form: {
        id: number;
        name: string;
        description: string;
        frequency: string;
        structure: {
            elements: FormElement[];
        };
    };
}

const frequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'custom', label: 'Custom' },
];

export default function EditForm() {
    const { form } = usePage<PageProps>().props;
    
    const [formData, setFormData] = useState<FormData>({
        title: form.name,
        description: form.description,
        frequency: form.frequency,
        elements: form.structure.elements || [],
    });

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Forms',
            href: '/forms',
        },
        {
            title: form.name,
            href: `/forms/${form.id}`,
        },
        {
            title: 'Edit Form',
            href: `/forms/${form.id}/edit`,
        },
    ];

    const handleFormMetadataChange = (field: keyof Pick<FormData, 'title' | 'description' | 'frequency'>, value: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleElementAdd = (element: Omit<FormElement, 'id'>) => {
        const newElement: FormElement = {
            ...element,
            id: `element_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        };
        
        setFormData((prev: FormData) => ({
            ...prev,
            elements: [...prev.elements, newElement],
        }));
    };

    const handleElementUpdate = (id: string, updates: Partial<FormElement>) => {
        setFormData((prev: FormData) => ({
            ...prev,
            elements: prev.elements.map((element: FormElement) => 
                element.id === id ? { ...element, ...updates } : element
            ),
        }));
    };

    const handleElementDelete = (id: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            elements: prev.elements.filter((element: FormElement) => element.id !== id),
        }));
    };

    const handleSave = () => {
        // TODO: Implement update functionality
        console.log('Updating form:', formData);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${form.name}`} />
            
            <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/forms">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Forms
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight">Edit Form: {form.name}</h1>
                            <p className="text-muted-foreground">
                                Modify your form structure and settings
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                        </Button>
                        <Button onClick={handleSave} size="sm">
                            <Save className="mr-2 h-4 w-4" />
                            Update Form
                        </Button>
                    </div>
                </div>

                {/* Form Metadata */}
                <Card>
                    <CardHeader>
                        <CardTitle>Form Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="title">Form Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Enter form title..."
                                    value={formData.title}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormMetadataChange('title', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="frequency">Frequency</Label>
                                <Select
                                    value={formData.frequency}
                                    onValueChange={(value) => handleFormMetadataChange('frequency', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select frequency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {frequencyOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Enter form description..."
                                value={formData.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormMetadataChange('description', e.target.value)}
                                rows={3}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Form Builder */}
                <div className="flex flex-1 gap-6 overflow-hidden">
                    {/* Left Sidebar - Element Palette */}
                    <div className="w-80 flex-shrink-0">
                        <FormElementPalette onElementAdd={handleElementAdd} />
                    </div>

                    {/* Main Canvas */}
                    <div className="flex-1 overflow-hidden">
                        <FormCanvas
                            elements={formData.elements}
                            onElementUpdate={handleElementUpdate}
                            onElementDelete={handleElementDelete}
                            onElementAdd={handleElementAdd}
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

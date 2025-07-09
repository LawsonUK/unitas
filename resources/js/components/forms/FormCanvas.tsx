import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Trash2, Move, Settings } from 'lucide-react';
import { type FormElement } from '@/types/forms';

interface FormCanvasProps {
    elements: FormElement[];
    onElementUpdate: (id: string, updates: Partial<FormElement>) => void;
    onElementDelete: (id: string) => void;
    onElementAdd?: (element: Omit<FormElement, 'id'>) => void;
}

export default function FormCanvas({ elements, onElementUpdate, onElementDelete, onElementAdd }: FormCanvasProps) {
    const [selectedElement, setSelectedElement] = useState<string | null>(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const canvasRef = useRef<HTMLDivElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const elementData = e.dataTransfer.getData('application/json');
        if (elementData) {
            try {
                const elementType = JSON.parse(elementData);
                const rect = canvasRef.current?.getBoundingClientRect();
                if (rect) {
                    const x = e.clientX - rect.left - dragOffset.x;
                    const y = e.clientY - rect.top - dragOffset.y;
                    
                    const newElement = {
                        type: elementType.type,
                        label: elementType.label,
                        placeholder: elementType.defaultProperties.placeholder || '',
                        required: elementType.defaultProperties.required || false,
                        options: elementType.defaultProperties.options || [],
                        position: { x, y },
                        size: { width: 200, height: 40 },
                        properties: elementType.defaultProperties,
                    };
                    
                    // Call the parent's onElementAdd function
                    if (onElementAdd) {
                        onElementAdd(newElement);
                    }
                }
            } catch (error) {
                console.error('Error parsing dropped element:', error);
            }
        }
    };

    const handleElementMouseDown = (e: React.MouseEvent, elementId: string) => {
        e.stopPropagation();
        setSelectedElement(elementId);
        
        const element = elements.find(el => el.id === elementId);
        if (element) {
            const rect = e.currentTarget.getBoundingClientRect();
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleCanvasMouseMove = (e: React.MouseEvent) => {
        if (selectedElement && canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - dragOffset.x;
            const y = e.clientY - rect.top - dragOffset.y;
            
            onElementUpdate(selectedElement, {
                position: { x, y },
            });
        }
    };

    const handleCanvasMouseUp = () => {
        setSelectedElement(null);
    };

    const renderElement = (element: FormElement) => {
        const isSelected = selectedElement === element.id;
        const elementStyle = {
            position: 'absolute' as const,
            left: `${element.position.x}px`,
            top: `${element.position.y}px`,
            width: `${element.size.width}px`,
            height: `${element.size.height}px`,
            zIndex: isSelected ? 10 : 1,
        };

        const commonProps = {
            className: `absolute ${isSelected ? 'ring-2 ring-primary' : ''}`,
            style: elementStyle,
            onMouseDown: (e: React.MouseEvent) => handleElementMouseDown(e, element.id),
        };

        switch (element.type) {
            case 'text':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between mb-1">
                            <Label className="text-xs">{element.label}</Label>
                            <div className="flex items-center gap-1">
                                {element.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0"
                                    onClick={() => onElementDelete(element.id)}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                        <Input
                            placeholder={element.placeholder}
                            className="w-full"
                            readOnly
                        />
                    </div>
                );

            case 'textarea':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between mb-1">
                            <Label className="text-xs">{element.label}</Label>
                            <div className="flex items-center gap-1">
                                {element.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0"
                                    onClick={() => onElementDelete(element.id)}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                        <Textarea
                            placeholder={element.placeholder}
                            className="w-full resize-none"
                            rows={3}
                            readOnly
                        />
                    </div>
                );

            case 'select':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between mb-1">
                            <Label className="text-xs">{element.label}</Label>
                            <div className="flex items-center gap-1">
                                {element.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0"
                                    onClick={() => onElementDelete(element.id)}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                        <Select disabled>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                                {element.options?.map((option, index) => (
                                    <SelectItem key={index} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                );

            case 'checkbox':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox disabled />
                                <Label className="text-sm">{element.label}</Label>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => onElementDelete(element.id)}
                            >
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                );

            case 'heading':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">{element.properties.text || 'Heading'}</h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => onElementDelete(element.id)}
                            >
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                );

            case 'paragraph':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">
                                {element.properties.text || 'Enter paragraph text...'}
                            </p>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => onElementDelete(element.id)}
                            >
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                );

            case 'divider':
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between">
                            <div className="flex-1 border-t" />
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => onElementDelete(element.id)}
                            >
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                );

            default:
                return (
                    <div key={element.id} {...commonProps}>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">{element.label}</span>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() => onElementDelete(element.id)}
                            >
                                <Trash2 className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <Card className="h-full">
            <CardContent className="p-6 h-full">
                <div
                    ref={canvasRef}
                    className="relative mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 shadow-sm"
                    style={{
                        width: '210mm',
                        height: '297mm',
                        minHeight: '297mm',
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={handleCanvasMouseUp}
                    onMouseLeave={handleCanvasMouseUp}
                >
                    {/* A4 Page Content */}
                    <div className="p-8">
                        {elements.map(renderElement)}
                    </div>
                    
                    {/* Drop Zone Indicator */}
                    {elements.length === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                                <Move className="mx-auto h-12 w-12 mb-4 opacity-50" />
                                <p className="text-lg font-medium">Drag elements here</p>
                                <p className="text-sm">Start building your form by dragging elements from the sidebar</p>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
} 
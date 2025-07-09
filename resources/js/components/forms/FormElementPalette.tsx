import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
    Type, 
    FileText, 
    Hash, 
    Mail, 
    Phone, 
    Calendar, 
    Clock, 
    CalendarDays,
    ChevronDown,
    CheckSquare,
    CircleDot,
    Upload,
    Heading1,
    AlignLeft,
    Minus,
    Image,
    GripVertical
} from 'lucide-react';
import { type ElementType, type ElementPaletteItem } from '@/types/forms';

interface FormElementPaletteProps {
    onElementAdd: (element: Omit<import('@/types/forms').FormElement, 'id'>) => void;
}

const elementTypes: ElementPaletteItem[] = [
    {
        type: 'text',
        label: 'Text Input',
        icon: 'Type',
        description: 'Single line text input',
        defaultProperties: {
            placeholder: 'Enter text...',
            required: false,
        },
    },
    {
        type: 'textarea',
        label: 'Text Area',
        icon: 'FileText',
        description: 'Multi-line text input',
        defaultProperties: {
            placeholder: 'Enter text...',
            rows: 3,
            required: false,
        },
    },
    {
        type: 'number',
        label: 'Number Input',
        icon: 'Hash',
        description: 'Numeric input field',
        defaultProperties: {
            placeholder: 'Enter number...',
            min: 0,
            required: false,
        },
    },
    {
        type: 'email',
        label: 'Email Input',
        icon: 'Mail',
        description: 'Email address input',
        defaultProperties: {
            placeholder: 'Enter email...',
            required: false,
        },
    },
    {
        type: 'phone',
        label: 'Phone Input',
        icon: 'Phone',
        description: 'Phone number input',
        defaultProperties: {
            placeholder: 'Enter phone number...',
            required: false,
        },
    },
    {
        type: 'date',
        label: 'Date Picker',
        icon: 'Calendar',
        description: 'Date selection input',
        defaultProperties: {
            required: false,
        },
    },
    {
        type: 'time',
        label: 'Time Picker',
        icon: 'Clock',
        description: 'Time selection input',
        defaultProperties: {
            required: false,
        },
    },
    {
        type: 'datetime',
        label: 'Date & Time',
        icon: 'CalendarDays',
        description: 'Date and time selection',
        defaultProperties: {
            required: false,
        },
    },
    {
        type: 'select',
        label: 'Dropdown',
        icon: 'ChevronDown',
        description: 'Dropdown selection',
        defaultProperties: {
            options: ['Option 1', 'Option 2', 'Option 3'],
            required: false,
        },
    },
    {
        type: 'checkbox',
        label: 'Checkbox',
        icon: 'CheckSquare',
        description: 'Checkbox input',
        defaultProperties: {
            required: false,
        },
    },
    {
        type: 'radio',
        label: 'Radio Button',
        icon: 'CircleDot',
        description: 'Radio button input',
        defaultProperties: {
            options: ['Option 1', 'Option 2'],
            required: false,
        },
    },
    {
        type: 'file',
        label: 'File Upload',
        icon: 'Upload',
        description: 'File upload input',
        defaultProperties: {
            accept: '*/*',
            required: false,
        },
    },
    {
        type: 'heading',
        label: 'Heading',
        icon: 'Heading1',
        description: 'Section heading',
        defaultProperties: {
            text: 'Heading',
            level: 2,
        },
    },
    {
        type: 'paragraph',
        label: 'Paragraph',
        icon: 'AlignLeft',
        description: 'Text paragraph',
        defaultProperties: {
            text: 'Enter paragraph text...',
        },
    },
    {
        type: 'divider',
        label: 'Divider',
        icon: 'Minus',
        description: 'Horizontal divider line',
        defaultProperties: {},
    },
    {
        type: 'image',
        label: 'Image',
        icon: 'Image',
        description: 'Image display',
        defaultProperties: {
            src: '',
            alt: 'Image',
        },
    },
];

const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
        Type,
        FileText,
        Hash,
        Mail,
        Phone,
        Calendar,
        Clock,
        CalendarDays,
        ChevronDown,
        CheckSquare,
        CircleDot,
        Upload,
        Heading1,
        AlignLeft,
        Minus,
        Image,
    };
    return iconMap[iconName] || Type;
};

export default function FormElementPalette({ onElementAdd }: FormElementPaletteProps) {
    const handleElementClick = (elementType: ElementPaletteItem) => {
        const newElement = {
            type: elementType.type,
            label: elementType.label,
            placeholder: elementType.defaultProperties.placeholder || '',
            required: elementType.defaultProperties.required || false,
            options: elementType.defaultProperties.options || [],
            position: { x: 50, y: 50 }, // Default position
            size: { width: 200, height: 40 }, // Default size
            properties: elementType.defaultProperties,
        };
        
        onElementAdd(newElement);
    };

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4" />
                    Form Elements
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                    {elementTypes.map((elementType) => {
                        const IconComponent = getIconComponent(elementType.icon);
                        return (
                            <div
                                key={elementType.type}
                                className="group cursor-pointer rounded-lg border p-3 transition-all hover:border-primary hover:bg-muted/50"
                                onClick={() => handleElementClick(elementType)}
                                draggable
                                onDragStart={(e) => {
                                    e.dataTransfer.setData('application/json', JSON.stringify(elementType));
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                                        <IconComponent className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium truncate">
                                                {elementType.label}
                                            </span>
                                            {elementType.defaultProperties.required && (
                                                <Badge variant="destructive" className="text-xs">
                                                    Required
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground truncate">
                                            {elementType.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
} 
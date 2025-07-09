export type ElementType = 
    | 'text'
    | 'textarea'
    | 'number'
    | 'email'
    | 'phone'
    | 'date'
    | 'time'
    | 'datetime'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'heading'
    | 'paragraph'
    | 'divider'
    | 'image';

export interface FormElement {
    id: string;
    type: ElementType;
    label?: string;
    placeholder?: string;
    required?: boolean;
    options?: string[]; // For select, radio, checkbox
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    properties: {
        [key: string]: any;
    };
}

export interface FormData {
    title: string;
    description: string;
    frequency: string;
    elements: FormElement[];
}

export interface ElementPaletteItem {
    type: ElementType;
    label: string;
    icon: string;
    description: string;
    defaultProperties: {
        [key: string]: any;
    };
} 
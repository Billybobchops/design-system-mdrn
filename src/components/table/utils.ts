import type { ColumnConfig } from '@components/table/types';

// Type guard to check if a value is a record/object
export function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Type guard to check for nested arrays
export function isNestedArray(value: unknown): value is Array<Record<string, unknown>> {
    return Array.isArray(value) && value.every(isRecord);
}

export const formatHeader = (str: string) => {
    return str
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

export function getNestedColumns(nestedData: unknown): ColumnConfig<Record<string, unknown>>[] {
    const sampleItem = Array.isArray(nestedData) ? nestedData[0] : {};
    return Object.keys(sampleItem).map(key => ({
        key,
        header: formatHeader(key),
        width: 'auto',
    }));
}

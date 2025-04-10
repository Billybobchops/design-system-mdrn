export type ColumnConfig<T> = {
    key: keyof T;
    header: string;
    width?: string;
    align?: 'left' | 'right' | 'center';
    render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type NestedTableConfig<T, K extends Record<string, unknown>> = {
    key: keyof T;
    title?: string;
    columns: ColumnConfig<K>[];
    getNestedData: (row: T) => K[];
};

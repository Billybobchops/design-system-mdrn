import type { ColumnConfig } from '@components/table/types';
export declare function isRecord(value: unknown): value is Record<string, unknown>;
export declare function isNestedArray(value: unknown): value is Array<Record<string, unknown>>;
export declare const formatHeader: (str: string) => string;
export declare function getNestedColumns(nestedData: unknown): ColumnConfig<Record<string, unknown>>[];

// types/react-table.d.ts
import { ColumnMeta } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
	interface ColumnMeta<TData, TValue> {
		type?: string;
		isSticky?: boolean;
	}
}

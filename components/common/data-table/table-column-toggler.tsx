"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface DataTableColumnTogglerProps<TData> {
	table: Table<TData>;
}

export function DataTableColumnToggler<TData>({
	table,
}: DataTableColumnTogglerProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="md" onClick={(e) => e.stopPropagation()}>
					<SlidersHorizontal className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
					Mostrar Colunas
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				side="top"
				sideOffset={4}
				align="end"
				className="min-w-[300px]  overflow-y-auto"
			>
				<DropdownMenuLabel>Colunas</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<ScrollArea>
					<ul className="grid grid-cols-2 gap-2 p-2">
						{table
							.getAllColumns()
							.filter(
								(column) =>
									typeof column.accessorFn !== "undefined" &&
									column.getCanHide()
							)
							.map((column) => {
								const columnLabel = column.columnDef.header as string;
								return (
									<li key={column.id}>
										<DropdownMenuCheckboxItem
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}
											onSelect={(event) => {
												event.preventDefault();
											}}
										>
											{columnLabel}
										</DropdownMenuCheckboxItem>
									</li>
								);
							})}
					</ul>
				</ScrollArea>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

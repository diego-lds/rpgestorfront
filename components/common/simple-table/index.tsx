"use client";

import * as React from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SimpleTableProps<TData> {
	columns: ColumnDef<TData, any>[];
	data: TData[];
}

export function SimpleTable<TData>({ columns, data }: SimpleTableProps<TData>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<div className="border-t border-default-200">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} colSpan={header.colSpan} className="whitespace-nowrap h-11 text-left">
										{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="hover:bg-default-50">
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="text-sm text-default-600">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<EmptyRow />
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

const EmptyRow = () => (
	<TableRow>
		<TableCell className="h-24">
			<span>Sem resultados</span>
		</TableCell>
	</TableRow>
);

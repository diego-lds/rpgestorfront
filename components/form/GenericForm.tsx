import Select from "../Select";
import { useForm, Path, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FieldConfig } from "@/app/types/FieldConfig";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface GenericFormProps<T extends Record<string, z.ZodTypeAny>, U> {
	schema: z.ZodObject<T>;
	onSubmit: (data: z.infer<z.ZodObject<T>>) => void;
	fields: FieldConfig<U>[];
}

const GenericForm = <T extends Record<string, z.ZodTypeAny>, U>({ schema, onSubmit, fields }: GenericFormProps<T, U>) => {
	type FormData = z.infer<z.ZodObject<T>>;

	const methods = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const {
		handleSubmit,
		formState: { errors },
	} = methods;

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-6" // Layout em duas colunas
			>
				{fields.map((field) => (
					<div key={String(field.id)} className="space-y-2">
						<Label htmlFor={String(field.id)}>{field.title}:</Label>
						{field.type === "select" && field.options ? (
							<Select
								id={String(field.id)}
								name={String(field.id) as Path<FormData>}
								options={field.options.map((option) => ({
									value: String(option.value),
									label: option.label,
								}))}
							/>
						) : (
							<Input type="text" size="lg" id={String(field.id)} {...methods.register(String(field.id) as Path<FormData>)} />
						)}
						{errors[String(field.id)] && <p className="text-red-500  mt-1">{String(errors[String(field.id)]?.message) ?? ""}</p>}
					</div>
				))}
				<div className="md:col-span-2 mt-4">
					<Button type="submit" className="w-full md:w-auto">
						Salvar
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default GenericForm;

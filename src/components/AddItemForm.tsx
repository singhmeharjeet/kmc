"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
const warehouseOptions = ["warehouse1", "warehouse2", "warehouse3"] as const;
const formSchema = z.object({
	batch: z.object({
		initial_quantity: z.string(),
		warehouse: z.enum(warehouseOptions),
		quantity_left: z.number().min(0),
		invoice: z.string().optional(),
	}),
	item: z.object({
		name: z.string().min(3, {
			message: "Name must be at least 3 characters long",
		}),
		model_number: z.string().min(3, {
			message: "Model number must be at least 3 characters long",
		}),
		picture: z.string().optional(),
		brand: z.string().optional(),
		manufacturer: z.string().optional(),
		description: z.string().optional(),
		weight: z.number().min(1).optional(),
	}),
});

function AddItemForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			batch: {
				initial_quantity: "",
				warehouse: "warehouse1",
				quantity_left: 0,
				invoice: "",
			},
			item: {
				name: "",
				model_number: "",
				picture: "",
				description: "",
				weight: 0,
			},
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log("values");
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => {
					console.log("submitted", e);
					// form.handleSubmit(e);
				}}
				className="grid md:grid-cols-2 gap-4 z-10 p-1"
			>
				<h4 className="text-lg font-semibold">Batch Details</h4>
				<FormField
					control={form.control}
					name="batch.initial_quantity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantity</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="batch.warehouse"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Warehouse</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a Warehouse" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{warehouseOptions.map((warehouse) => (
											<SelectItem
												key={warehouse}
												value={warehouse}
											>
												Warehouse{" "}
												{
													warehouse[
														warehouse.length - 1
													]
												}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{/* Batch Section */}
				<Separator className="my-4" />

				{/* <section className="">
					<h4 className="text-lg font-semibold">Item Details</h4>
					<FormField
						control={form.control}
						name="item.model_number"
						render={({ field }) => (
							<FormItem>
								<FormLabel aria-required>
									Model Number
								</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="item.name"
						render={({ field }) => (
							<FormItem>
								<FormLabel aria-required>Name</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="item.picture"
						render={({ field }) => (
							<FormItem>
								<FormLabel aria-required>
									Take Picture
								</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</section> */}
				{/* Item Section */}
				<Button
					type="submit"
					className="md:translate-x-1/2"
					onClick={(e) => console.log("clicked")}
				>
					Submit
				</Button>
			</form>
		</Form>
	);
}

export function ProfileForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			batch: {
				initial_quantity: "",
				warehouse: "warehouse1",
				quantity_left: 0,
				invoice: "",
			},
			item: {
				name: "",
				model_number: "",
				picture: "",
				description: "",
				weight: 0,
			},
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log("values");
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="batch.initial_quantity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantiy</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="batch.initial_quantity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantity</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="md:translate-x-1/2">
					Submit
				</Button>
			</form>
		</Form>
	);
}

export default AddItemForm;

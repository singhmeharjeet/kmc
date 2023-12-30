/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SXxlj7Dn60h
 */
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	CollapsibleTrigger,
	CollapsibleContent,
	Collapsible,
} from "@/components/ui/collapsible";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const orders: OrderType[] = [
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 27, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 28, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
	{
		id: "12345",
		date: "december 28, 2023",
		customer: {
			name: "John Doe DoeDoe",
			email: "asf",
		},
		total: 200,
		items: [
			{
				id: "123",
				name: "Fancy Shoes",
				quantity: 2,
				price: 20,
			},
			{
				id: "222",
				name: "Stylish Hat",
				quantity: 1,
				price: 22222,
			},
		],
		address: "1234 Street, City, State, Country",
	},
];
export default function OrderTab() {
	let prevDate = "";
	return (
		<>
			<div className="p-2">
				<Input placeholder="Search for Orders" className="" />
			</div>
			<main
				key="1"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6"
			>
				{orders.map((order, i) => (
					<div key={i} className="flex flex-col w-full justify-end">
						{prevDate !== order.date && (prevDate = order.date) ? (
							<div className="text-xl font-semibold mb-4 capitalize">
								{order.date}
							</div>
						) : null}

						<Order order={order} />
					</div>
				))}
			</main>
		</>
	);
}

function Order({ order }: { order: OrderType }) {
	return (
		<Collapsible className="">
			<Card className="space-y-2">
				<CollapsibleTrigger asChild>
					<CardHeader className="flex flex-row justify-between items-start">
						<CardTitle className="text-lg text-balance w-1/2">
							{order.customer.name}
						</CardTitle>
						<div className="text-right m-0">
							<p className="font-semibold mb-2">
								Order#{order.id}
							</p>
							<Badge>${order.total}</Badge>
						</div>
					</CardHeader>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<CardContent>
						<div className="py-2 px-1 w-full flex gap-4 sm:gap-8 items-baseline justify-start">
							<Label>Address: </Label>
							<p className="text-sm">{order.address}</p>
						</div>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Product</TableHead>
									<TableHead className="text-right">
										Quantity
									</TableHead>
									<TableHead className="text-right">
										Price
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.items.map((item) => (
									<TableRow>
										<TableCell>{item.name}</TableCell>
										<TableCell className="text-right">
											${item.quantity}
										</TableCell>
										<TableCell className="text-right">
											${item.price}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</CollapsibleContent>
			</Card>
		</Collapsible>
	);
}

"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";
import { Label } from "./ui/label";

const HomeTab = () => {
	return (
		<div className="h-full w-[90%] overflow-y-scroll flex flex-col gap-2 justify-center items-center">
			<Carousel className="w-full max-w-sm md:max-w-xl">
				<Label className="text-lg">Recent Orders</Label>
				<CarouselContent className="-ml-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 basis-[55%] md:basis-[40%] lg:basis[30%]"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-2">
										<span className="text-2xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute hidden md:flex" />
				<CarouselNext className="absolute hidden md:flex" />
			</Carousel>

			<Carousel className="w-full max-w-sm md:max-w-lg">
				<Label className="text-lg">Recently Seen items</Label>
				<CarouselContent className="-ml-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 basis-[55%] md:basis-[40%] lg:basis[30%]"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-2">
										<span className="text-2xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute hidden md:flex" />
				<CarouselNext className="absolute hidden md:flex" />
			</Carousel>
			<Carousel className="w-full max-w-sm md:max-w-lg">
				<Label className="text-lg">Recently Added</Label>
				<CarouselContent className="-ml-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 basis-[55%] md:basis-[40%] lg:basis[30%]"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-2">
										<span className="text-2xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute hidden md:flex" />
				<CarouselNext className="absolute hidden md:flex" />
			</Carousel>
			<Carousel className="w-full max-w-sm md:max-w-lg">
				<Label className="text-lg">Recent Customers</Label>
				<CarouselContent className="-ml-1">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 basis-[55%] md:basis-[40%] lg:basis[30%]"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-2">
										<span className="text-2xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute hidden md:flex" />
				<CarouselNext className="absolute hidden md:flex" />
			</Carousel>
		</div>
	);
};

export default HomeTab;

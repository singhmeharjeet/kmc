"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddItemForm from "./AddItemForm";
import { LucidePlus } from "lucide-react";


function ViewItems(){
	return (
				<Button asChild
					onClick={(e) => console.log("clicked")}
				> 
					<Link href="/addItem">
						<LucidePlus></LucidePlus>
					</Link>
				</Button>
	);
}
export default ViewItems;

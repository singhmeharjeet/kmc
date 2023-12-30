"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  LucideHome,
  LucideMenu,
  LucidePackage,
  LucideScrollText,
} from "lucide-react";

import HomeTab from "@/components/HomeTab";
import ViewItems from "@/components/ViewItems";
import OrderTab from "@/components/OrderTab";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import MoreList from "@/components/MoreList";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  else if (status === "unauthenticated") {
    return (
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/protected",
          })
        }
      >
        Sign In
      </Button>
    );
  }

  return (
    <>
      <div className="relative h-screen w-screen">
        {/* Create Tabs at the bottom */}
        <Tabs
          defaultValue="home"
          className="h-[calc(100% - 10rem)] m-0 w-full border-4 p-4 pb-24 placeholder:overflow-hidden"
        >
          <div className="fixed bottom-0 left-0 z-10 flex h-auto w-full justify-center p-2 backdrop-blur-lg md:backdrop-blur-none">
            <TabsList className="h-auto max-w-sm flex-1">
              <TabsTrigger className="flex grow flex-col" value="home">
                <LucideHome />
                Home
              </TabsTrigger>
              <TabsTrigger className="flex grow flex-col" value="items">
                <LucidePackage />
                Items
              </TabsTrigger>
              <TabsTrigger className="flex grow flex-col" value="orders">
                <LucideScrollText />
                Orders
              </TabsTrigger>
              <Popover>
                <PopoverTrigger className="inline-flex grow flex-col items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                  <LucideMenu />
                  More
                </PopoverTrigger>
                <PopoverContent
                  align="center"
                  className="z-10 mb-2 mr-2 grid w-full max-w-[calc(80vw-2rem)] gap-3 rounded-xl bg-secondary p-2 shadow-lg"
                >
                  <MoreList />
                </PopoverContent>
              </Popover>
            </TabsList>
          </div>

          <TabsContent
            value="home"
            className="flex h-full w-full min-w-full items-center justify-center overflow-scroll"
          >
            <HomeTab />
          </TabsContent>

          <TabsContent
            value="items"
            className="h-full min-h-full w-full overflow-scroll"
          >
            <ViewItems />
          </TabsContent>

          <TabsContent value="orders" className="h-full w-full overflow-scroll">
            <OrderTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

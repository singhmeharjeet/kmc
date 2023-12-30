import React from "react";
import ProfileButton from "./ProfileButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const MoreList = () => {
  return (
    <>
      <ListItem>
        <ProfileButton />
      </ListItem>
      <ListItem
        onClick={() => signOut({ callbackUrl: "/" })}
        title="Sign Out"
        className="p-6 hover:ring-destructive focus:ring-destructive active:ring-destructive"
      ></ListItem>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "#", ...props }, ref) => {
  return (
    <div className="h-full w-full p-0">
      <Link
        href={href}
        ref={ref}
        className={cn(
          "block h-full w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground",
          "transition-all duration-300 animate-in hover:cursor-pointer hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white",
          className,
        )}
        {...props}
      >
        <div className="text-[1rem] font-medium leading-none text-white/90">
          {title}
        </div>
        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </div>
      </Link>
    </div>
  );
});
ListItem.displayName = "ListItem";

export default MoreList;

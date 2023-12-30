"use client";

import React, { FC, HTMLAttributes } from "react";
import { Label } from "./ui/label";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";

interface ProfileButtonProps extends HTMLAttributes<HTMLDivElement> {}
const ProfileButton: FC<ProfileButtonProps> = () => {
  const { status, data: session } = useSession();
  if (status !== "authenticated") {
    return (
      <>
        <div className="flex h-full w-full">Waiting For authentication</div>
      </>
    );
  }
  return (
    <>
      <div className="flex h-full w-full">
        <div className="flex w-3/5 flex-col items-start justify-center lg:h-2/5 lg:w-full">
          <Label className="cursor-pointer text-lg font-medium">Profile</Label>
          <p className="pr-2 text-sm leading-tight text-muted-foreground">
            Information about your account and preferences.
          </p>
        </div>
        <div className="relative w-2/5">
          <Avatar>
            <AvatarImage
              alt="account picture"
              src={session?.user?.image ?? ""}
            />
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default ProfileButton;

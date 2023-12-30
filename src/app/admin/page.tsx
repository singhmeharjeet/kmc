import { getServerAuthSession } from "@/server/auth";
import React from "react";

const page = async () => {
  return <div>Welcome {(await getServerAuthSession())?.user.name}</div>;
};

export default page;

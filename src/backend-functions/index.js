import * as React from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import * as API from "./commerce";
import fetchUserOnAuth from "./auth";

export default function BackendFunction({ children }) {
  fetchUserOnAuth();

  return <React.Fragment>{children}</React.Fragment>;
}

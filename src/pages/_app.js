import "@/styles/globals.css";
import * as React from "react";
import { LoadingContext, AuthContext } from "../contexts";
import { SessionProvider, signIn, signOut } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  return getLayout(
    <SessionProvider session={session}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <Component {...pageProps} />
          <button onClick={() => signIn()}>Signin</button>
        </AuthContext.Provider>
      </LoadingContext.Provider>
    </SessionProvider>
  );
}

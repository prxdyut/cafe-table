import "@/styles/globals.css";
import * as React from "react";
import { LoadingContext, AuthContext } from "../contexts";
import { SessionProvider } from "next-auth/react";
import BackendFunctions from "../backend-functions";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(false);

  return getLayout(
    <SessionProvider session={session}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <BackendFunctions>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </BackendFunctions>
        </AuthContext.Provider>
      </LoadingContext.Provider>
    </SessionProvider>
  );
}

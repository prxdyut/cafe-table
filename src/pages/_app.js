import "@/styles/globals.css";
import * as React from "react";
import { LoadingContext, AuthContext } from "../contexts";
import { SessionProvider } from "next-auth/react";
import BackendFunctions from "../backend-functions";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const [loading, setLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(false);
  console.log(router.asPath);
  
  return (
    <SessionProvider session={session}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <AuthContext.Provider value={{ auth, setAuth }}>
          <BackendFunctions>
            {getLayout(
              <AnimatePresence>
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ opacity: 1, x: "0vw" }}
                  exit={{ opacity: 0 }}
                  key={router.asPath.split('?')[0]}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            )}
          </BackendFunctions>
        </AuthContext.Provider>
      </LoadingContext.Provider>
    </SessionProvider>
  );
}

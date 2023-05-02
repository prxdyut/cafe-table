import * as React from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import * as API from "./commerce";
import { LoadingContext, AuthContext } from "../contexts";

export default function Auth() {
  const { setAuth } = React.useContext(AuthContext);
  const [data, setData] = React.useState(null);
  const { data: userData } = useSession();

  React.useEffect(() => {
    userData
      ? fetch("/api/customer/" + userData.user.email, {
          method: "POST",
          body: JSON.stringify({
            firstname: userData.user.name.split(" ")[0],
            lastname: userData.user.name.split(" ")[1],
            meta: { image: userData.user.image },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setAuth(data);
          })
      : () => {};
  }, [userData]);
}

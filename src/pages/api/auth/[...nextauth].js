import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "15301208763-oe6dm4pin4ao3j14d4hj7jkebtncjcdc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export default NextAuth(authOptions);

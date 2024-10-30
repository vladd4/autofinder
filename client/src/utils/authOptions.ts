import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { getSession } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 7200,
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      const session = await getSession();
      if (session) {
        return "/search";
      }
      return url;
    },

    async signIn({ user }) {
      if (!user?.email) {
        throw new Error("No Profile");
      }

      try {
        const { data } = await axios.get<User>(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/user/${user.email}`
        );
        if (!data) {
          await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/user/add`, {
            email: user.email,
            name: user.name,
            avatar: user.image,
          });
          console.log("New user added");
        } else {
          console.log("User already exists");
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        throw new Error("User data fetch error");
      }
      return true;
    },
  },
};

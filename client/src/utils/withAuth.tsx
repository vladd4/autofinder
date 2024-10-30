"use client";

import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { checkSession } from "./chechSession";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthHOC = async (props: P) => {
    const session = await checkSession();

    const router = useRouter();

    useEffect(() => {
      if (!session) {
        router.push("/login");
      }
    }, [session, router]);

    if (!session) {
      return <Loader />;
    }

    return session ? <WrappedComponent {...props} /> : null;
  };

  return AuthHOC;
};

export default withAuth;

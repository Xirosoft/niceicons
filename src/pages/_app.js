import { useRouter } from "next/router";
import { useEffect } from "react";
import useStore from "@/data/store";

import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  const { setIconSidebar } = useStore()
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIconSidebar({ open: false, icon: 'add'})
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}

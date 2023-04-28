import useStore from "@/data/store";
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const { darkMood } = useStore()

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// using theme this is client side any thing in the website that interactive comes in client side and by default all components comes in server side in next js

'use client';
import { ThemeProvider } from "next-themes";

const Providers = ({children}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="">
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers

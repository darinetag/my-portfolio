"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableColorScheme={true}>
      {children}
    </ThemeProvider>
  );
}

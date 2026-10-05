"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./theme-provider";
import SearchDialog from "@/components/search";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        <RootProvider search={{ SearchDialog }}>{children}</RootProvider>
      </ThemeProvider>
    </TooltipProvider>
  );
}

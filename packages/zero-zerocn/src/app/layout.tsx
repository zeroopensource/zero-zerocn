import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import SearchDialog from "@/components/search";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            SearchDialog,
          }}
          theme={{
            forcedTheme: "dark",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

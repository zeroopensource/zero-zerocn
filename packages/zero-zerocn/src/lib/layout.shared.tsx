import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
// import { BookIcon } from "lucide-react";
// import { PACKAGEJSON } from "@/lib/packagejson";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      // {
      //   icon: <BookIcon />,
      //   text: "Blog",
      //   url: "/blog",
      //   secondary: false,
      // },
      // {
      //   icon: <BookIcon />,
      //   text: "Docs",
      //   url: "/docs",
      //   secondary: true,
      // },
    ],
  };
}

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// import { BookIcon } from "lucide-react";
import { PACKAGEJSON } from "@/lib/packagejson";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: PACKAGEJSON.shortName,
      url: "/docs",
    },
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
    githubUrl: PACKAGEJSON.repository,
  };
}

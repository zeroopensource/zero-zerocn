import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { SupportCard } from "./support-card";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        banner: <SupportCard />,
      }}
      tabs={[
        {
          title: "Docs",
          description: "Hello World!",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "/docs/docs",

          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
        {
          title: "Schema",
          description: "Hello World!",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "/docs/schema",

          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
        {
          title: "Zero",
          description: "Hello World!",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "/docs/zero",

          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
      ]}
      themeSwitch={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}

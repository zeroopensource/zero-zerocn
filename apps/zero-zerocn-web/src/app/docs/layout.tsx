import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { SupportCard } from "@/components/support-card";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        banner: <SupportCard />,
      }}
      tabs={[
        {
          title: "Core",
          description: "Core Documentation",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "/docs",
          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
        {
          title: "ZeroCN",
          description: "ZeroCN Documentation",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "https://zerocn.zeroopensource.org/docs",
          // optionally, you can specify a set of urls which activates the item
          // urls: new Set(['/docs/test', '/docs/components']),
        },
        {
          title: "Zero",
          description: "Zero Documentation",
          // active for `/docs/components` and sub routes like `/docs/components/button`
          url: "/zero",
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

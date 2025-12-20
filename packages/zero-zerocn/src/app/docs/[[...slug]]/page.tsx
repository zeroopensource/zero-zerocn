import type { TOCItemType } from "fumadocs-core/toc";
import {
  DocsBody,
  DocsPage,
  // DocsTitle,
  // DocsDescription,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { GiscusComments } from "@/root/src/components/giscus";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const commentsTocItem: TOCItemType = {
    title: "Comments",
    url: "#comments",
    depth: 1,
  };

  return (
    <DocsPage
      breadcrumb={{ enabled: false }}
      full={page.data.full}
      toc={[...page.data.toc, commentsTocItem]}
    >
      {/* 
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription> 
      */}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <GiscusComments />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return await source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  return {
    title: `${page.data.title} - Zero`,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

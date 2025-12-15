import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

// ssr
// export const { GET } = createFromSource(source, {
//   // https://docs.orama.com/docs/orama-js/supported-languages
//   language: 'english',
// });

// static export
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source);

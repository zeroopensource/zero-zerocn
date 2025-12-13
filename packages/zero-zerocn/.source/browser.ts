// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "test.mdx": () => import("../content/docs/test.mdx?collection=docs"), "shadcn/button.mdx": () => import("../content/docs/shadcn/button.mdx?collection=docs"), "shadcn/index.mdx": () => import("../content/docs/shadcn/index.mdx?collection=docs"), }),
};
export default browserCollections;
// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "workspace.mdx": () => import("../content/docs/workspace.mdx?collection=docs"), "file/mdx-cheatsheet.mdx": () => import("../content/docs/file/mdx-cheatsheet.mdx?collection=docs"), "lib/env.mdx": () => import("../content/docs/lib/env.mdx?collection=docs"), "lib/packagejson.mdx": () => import("../content/docs/lib/packagejson.mdx?collection=docs"), "zero/zero-id.mdx": () => import("../content/docs/zero/zero-id.mdx?collection=docs"), "zero/zero-logo.mdx": () => import("../content/docs/zero/zero-logo.mdx?collection=docs"), }),
};
export default browserCollections;
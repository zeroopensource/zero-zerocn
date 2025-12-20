// @ts-nocheck
import * as __fd_glob_7 from "../content/docs/zero/zero-logo.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/zero/zero-id.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/lib/packagejson.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/lib/env.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/file/mdx-cheatsheet.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/workspace.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content\docs", {"meta.json": __fd_glob_0, }, {"index.mdx": __fd_glob_1, "workspace.mdx": __fd_glob_2, "file/mdx-cheatsheet.mdx": __fd_glob_3, "lib/env.mdx": __fd_glob_4, "lib/packagejson.mdx": __fd_glob_5, "zero/zero-id.mdx": __fd_glob_6, "zero/zero-logo.mdx": __fd_glob_7, });
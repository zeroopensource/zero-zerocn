// @ts-nocheck
import * as __fd_glob_6 from "../content/docs/shadcn/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/shadcn/button.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/shadcn/accordion.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/lib/packagejson.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/lib/env.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/test.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content\docs", {}, {"index.mdx": __fd_glob_0, "test.mdx": __fd_glob_1, "lib/env.mdx": __fd_glob_2, "lib/packagejson.mdx": __fd_glob_3, "shadcn/accordion.mdx": __fd_glob_4, "shadcn/button.mdx": __fd_glob_5, "shadcn/index.mdx": __fd_glob_6, });
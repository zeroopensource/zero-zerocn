"use client";

import Giscus from "@giscus/react";

export const GiscusComments = () => (
  <div className="mt-8">
    <h2 id="giscus-comments">Comments</h2>
    <Giscus
      category="Comments"
      categoryId="DIC_kwDOOkUDdM4C0B57"
      emitMetadata="1"
      id="comments"
      inputPosition="top"
      lang="en"
      loading="lazy"
      mapping="url"
      reactionsEnabled="1"
      repo="zeroopensource/zero-official"
      repoId="R_kgDOOkUDdA"
      term="Welcome!"
      theme="dark"
    />
  </div>
);

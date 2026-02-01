"use client";

import { ZERO_OFFICIAL_LINKS } from "@/lib/zero-official";

export const ZeroOfficialLinks = () => {
  const linkKeys = Object.keys(ZERO_OFFICIAL_LINKS);
  return (
    <div>
      {linkKeys.map((k) => (
        <div key={k}>
          <a href={ZERO_OFFICIAL_LINKS[k].url} target="_blank">
            {ZERO_OFFICIAL_LINKS[k].name}
          </a>
        </div>
      ))}
    </div>
  );
};

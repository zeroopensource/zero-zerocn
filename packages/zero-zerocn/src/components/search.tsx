"use client";
import { useDocsSearch } from "fumadocs-core/search/client";
import { staticClient } from "fumadocs-core/search/client/orama-static";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
  TagsList,
  TagsListItem,
} from "fumadocs-ui/components/dialog/search";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { useState } from "react";

export default function DefaultSearchDialog(props: SharedProps) {
  const tags = [
    { value: "all", label: "Search all tags" },
    { value: "archived", label: "archived" },
  ];
  const defaultTagValue = tags[0].value;
  const [tag, setTag] = useState<string | undefined>(defaultTagValue);
  const { locale } = useI18n();
  const { search, setSearch, query } = useDocsSearch({
    client: staticClient({
      locale,
      tag: tag === "all" ? undefined : tag,
    }),
  });

  return (
    <SearchDialog
      isLoading={query.isLoading}
      onSearchChange={setSearch}
      search={search}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data === "empty" ? null : query.data} />
        <SearchDialogFooter className="flex flex-row">
          <TagsList onTagChange={setTag} tag={tag}>
            {tags.map((t) => (
              <TagsListItem key={t.value} value={t.value}>
                {t.label}
              </TagsListItem>
            ))}
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}

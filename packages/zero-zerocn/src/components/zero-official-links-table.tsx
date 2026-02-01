"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ZERO_OFFICIAL_LINKS } from "@/lib/zero-official";

export const ZeroOfficialLinksTable = () => {
  const linkKeys = Object.keys(ZERO_OFFICIAL_LINKS);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Url</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {linkKeys.map((k) => {
          const link = ZERO_OFFICIAL_LINKS[k];
          return (
            <TableRow key={k}>
              <TableCell>
                <Link href={link.url} rel="noreferrer" target="_blank">
                  {link.name}
                </Link>
              </TableCell>
              <TableCell>
                {link.url ? (
                  <Link href={link.url} rel="noreferrer" target="_blank">
                    {link.url}
                  </Link>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

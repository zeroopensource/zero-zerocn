import { customAlphabet } from "nanoid";

const DEFAULT_PART_COUNT = 6;
const DEFAULT_PART_SIZE = 6;
const DEFAULT_SEPARATOR = "-";
const DEFAULT_PREFIX = "zero1";

type Params = {
  prefix?: string | null | undefined;
  /** x-x-x-x-x-x */
  partSize?: number | null | undefined;
  /** xxxxxxx */
  partCount?: number | null | undefined;
  separator?: string | null | undefined;
};

export const zeroId = ({ prefix, partSize, partCount, separator }: Params) => {
  const keys = Array.from({ length: partCount || DEFAULT_PART_COUNT }, () =>
    customAlphabet("1234567890abcdef", partSize || DEFAULT_PART_SIZE)()
  );
  return [prefix || DEFAULT_PREFIX, ...keys].join(
    separator || DEFAULT_SEPARATOR
  );
};

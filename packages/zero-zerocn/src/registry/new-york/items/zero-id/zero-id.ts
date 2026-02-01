import { nanoid } from "nanoid";

type Params = {
  prefix?: string | null | undefined;
};

export const zeroId = ({ prefix }: Params) => {
  return null;
};

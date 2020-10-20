import { ReactElement } from "react";

export type StickyHeadTableProps = {
  rows: ReactElement[];
  columns: ReactElement[];
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  loading: boolean;
};

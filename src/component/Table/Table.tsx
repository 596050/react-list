import React from "react";
import { Flex } from "@rebass/grid";

import { Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";

import { StickyHeadTableProps } from "./Table.types";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export const TableRow = MuiTableRow;
export const TableCell = MuiTableCell;

export default function StickyHeadTable({
  rows,
  columns,
  onChangePage,
  loading,
}: StickyHeadTableProps) {
  const classes = useStyles();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onChangePage(event);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>{columns}</TableRow>
          </TableHead>
          <TableBody data-testid="TableBody">{rows}</TableBody>
        </Table>
      </TableContainer>
      <Flex justifyContent="flex-end">
        <Button
          data-testid="TablePaginationMore"
          onClick={(e) => handleChangePage(e)}
          disabled={loading || !rows.length}
        >
          {loading ? "Loading" : "More"}
        </Button>
      </Flex>
    </Paper>
  );
}

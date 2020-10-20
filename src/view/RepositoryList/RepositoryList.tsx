import React, { useEffect } from "react";
import { Box } from "@rebass/grid";
import { useDebounce } from "use-debounce";

import { getRepositories, gqlQueryGithubSearch } from "../../api";
import {
  Paper,
  SearchInput,
  Table,
  TableCell,
  TableRow,
} from "../../component";

import { columns, createData } from "./RepositoryList.helpers";
import { Datum, Response } from "./RepositoryList.types";

function RepositoryList() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState<Datum[]>([]);
  const [response, setResponse] = React.useState<Response>();
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [debouncedValue] = useDebounce(value, 1000);

  // handle request to api and set response
  const request = (searchValue: string, after = "") => {
    setLoading(true);
    (async () => {
      const response:
        | {
            search?: GithubSearchRepositoriesResponse;
          }
        | undefined = await getRepositories({
        options: {
          body: JSON.stringify({
            query: `{${gqlQueryGithubSearch({
              query: searchValue,
              after,
            })} }`,
          }),
        },
      });

      setResponse({ ...response?.search, searchValue });
      setRows((r) => {
        const newEdges =
          response?.search?.edges?.map((edge) => {
            return createData(edge?.node);
          }) || [];

        return [...r, ...newEdges];
      });
      setLoading(false);
    })();
  };

  // on change of search input, make request
  useEffect(() => {
    let active = true;
    if (debouncedValue && value === debouncedValue && active) {
      request(debouncedValue);
    }
    return () => {
      active = false;
    };
  }, [debouncedValue]);

  // make search input controlled
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  // pagination handler
  const handleChangePage = () => {
    if (response && response?.pageInfo?.hasNextPage && !!rows.length) {
      request(debouncedValue, response?.pageInfo?.endCursor);
    }
  };

  return (
    <Paper
      container={{
        maxWidth: "xl",
      }}
    >
      <Box py={20} width={["100%", "50%", "30%"]}>
        <SearchInput
          open={open}
          loading={loading}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={handleChange}
          value={debouncedValue}
        />
      </Box>
      <Table
        onChangePage={handleChangePage}
        loading={loading}
        columns={columns.map((column) => (
          <TableCell key={column.id} align="left" style={{ minWidth: 100 }}>
            {column.label}
          </TableCell>
        ))}
        rows={rows.map((row) => {
          return (
            <TableRow
              data-testid="TableBodyRow"
              hover
              role="checkbox"
              tabIndex={-1}
              key={row.id}
              onClick={() => window.open(row.url, "_blank")}
              style={{
                cursor: "pointer",
              }}
            >
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align="left">
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      ></Table>
    </Paper>
  );
}

export default RepositoryList;

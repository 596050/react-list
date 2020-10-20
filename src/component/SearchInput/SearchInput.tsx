import React, { ChangeEvent } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { SearchInputProps } from "./SearchInput.types";

export default function Asynchronous({
  open,
  loading,
  onOpen,
  onClose,
  onChange,
  value,
  options = [],
}: SearchInputProps) {
  const handleOpen = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange && onChange(event);
  };

  return (
    <Autocomplete
      id="asynchronous"
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options?.length ? options : []}
      loading={loading}
      clearOnBlur={false}
      renderInput={(params) => (
        <TextField
          {...params}
          data-testid="SearchInput"
          label="Search"
          variant="outlined"
          value={value}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <SearchIcon />
                )}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

import { StandardTextFieldProps } from "@material-ui/core/TextField";

export type SearchInputProps = {
  open: boolean;
  loading: boolean;
  value: string;
  onOpen: () => void;
  onClose: () => void;
  onChange: StandardTextFieldProps["onChange"];
  options?: SearchInputOption[];
};

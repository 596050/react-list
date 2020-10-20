import React, { ReactNode } from "react";

import {
  ContainerProps,
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";

type PaperProps = {
  children: ReactNode;
  container?: Omit<ContainerProps, "children">;
  paper?: Omit<MuiPaperProps, "children">;
};

const Paper = ({ children, container, paper }: PaperProps) => {
  return (
    <React.Fragment>
      <Container {...container}>
        <MuiPaper {...paper}>{children}</MuiPaper>
      </Container>
    </React.Fragment>
  );
};

export default Paper;

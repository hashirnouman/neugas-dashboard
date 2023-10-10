import React, { ReactNode } from "react";

interface IText {
  p?: boolean;
  span?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  div?: boolean;
  children: ReactNode;
}
const Text = (props: IText) => {
  const { span, p, h1, h2, h3, h4, h5, h6, div, children } = props;
  if (p) {
    return <p>{children}</p>;
  }
};

export default Text;

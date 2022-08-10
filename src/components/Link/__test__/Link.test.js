import Link from "../Link";
import React from "react";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Link>test</Link>);
});

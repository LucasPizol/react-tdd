import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import "@testing-library/react-hooks";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

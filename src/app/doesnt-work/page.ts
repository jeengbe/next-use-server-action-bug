"use client"

import { use, useMemo } from "react";
import { loadThings } from "../action";

export default function Page() {
  const promise = useMemo(() => loadThings(), []);
  use(promise);

  return "hi";
}

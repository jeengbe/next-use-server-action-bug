"use client"

import { use } from "react";
import { loadThings } from "../action";

export default function Page() {
  use(loadThings());

  return "hi";
}

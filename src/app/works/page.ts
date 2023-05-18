import { loadThings } from "../action";

export default async function Page() {
  await loadThings();

  return "hi";
}

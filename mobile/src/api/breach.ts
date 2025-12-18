import { api } from "./client";

export async function checkBreach(identifier: string) {
  const res = await api.post("/breach-check", { identifier });
  return res.data;
}

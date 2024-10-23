import { redirect } from "next/navigation";

export async function testNavigate(data) {
  redirect(`/github/${data}`);
}

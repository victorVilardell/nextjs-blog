import { Post } from "@/app/page";
import getPosts from "@/services/getPosts";

export async function GET(request: Request) {
  const posts: Post[] = getPosts();
  return Response.json(posts);
}

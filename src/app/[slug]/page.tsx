import MarkdownPreview from "@/components/markdownPreview";
import getPost from "@/services/getPost";
import getPosts from "@/services/getPosts";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

const PostPage = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPost(slug);

  return (
    <section className="flex flex-col space-y-2">
      <Link href="/">
        <ArrowLeftCircle className="inline mb-3 align-top"></ArrowLeftCircle>{" "}
        Back to Home
      </Link>
      <article>
        <header className="mb-5">
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <h2>
            <i>{post.category}</i>
          </h2>
        </header>
        <MarkdownPreview source={post.content} />
        <p>
          <time>{post.date}</time> - <cite>{post.author}</cite>
        </p>
      </article>
    </section>
  );
};
export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
export default PostPage;

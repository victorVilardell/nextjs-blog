import getPosts from "@/services/getPosts";
import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  description: string;
};

const PostInfo = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col">
      <Link href={post.slug}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.description}</p>
    </div>
  );
};

const HomePage = () => {
  const posts = getPosts();

  return (
    <div className="flex flex-col space-y-2">
      {posts.map((post) => (
        <PostInfo key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default HomePage;

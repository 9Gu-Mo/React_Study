"use client";

// hook
import { useEffect, useState } from "react";

interface Reactions {
  likes: number;
  dislikes: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // api 결과값을 변수에 선언
        // const res = await fetch("https://dummyjson.com/posts", {
        //   // 클라이언트에서 fetch시 항상 최신 데이터를 받기 위해 캐시를 무시
        //   cache: "no-store",
        // });

        const res = await fetch("https://dummyjson.com/posts");

        // HTTP 상태 코드가 200~299가 아니면 에러를 던짐. 이 경우에 catch 블록에서 처리
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        // response를 json으로 변경
        const data = await res.json();
        setPosts(data.posts);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("에러에러");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>에러 발생 : {error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
          {/* object형태 데이터를 배열로 변환 */}
          {Object.entries(post.reactions).length > 0 && (
            <em>
              {Object.entries(post.reactions).map(([index, value]) => (
                <span key={index}>{value}</span>
              ))}
            </em>
          )}
          <em>
            {post.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </em>
        </li>
      ))}
    </ul>
  );
}

// component
import Content from "@/components/Content";
import ContentProvider from "@/components/ContentProvider";

// api
import { INFO } from "@/api/endpoints";

export default async function Home() {
  const res = await fetch(INFO.CONTENT, {
    next: { revalidate: 60 },
  });

  const content = await res.json();

  console.log(content);

  return (
    <>
      <ContentProvider content={content}>
        <Content />
      </ContentProvider>
    </>
  );
}

// component
import Content from "@/components/Content";
import ContentProvider from "@/components/ContentProvider";

export default async function Home() {
  const res = await fetch(
    "https://68a51b842a3deed2960c6b0a.mockapi.io/api/testv1/Content",
    {
      next: { revalidate: 60 },
    }
  );

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

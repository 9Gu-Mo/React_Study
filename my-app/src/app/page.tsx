// component
import ContentList from "@/components/ContentList";
import Header from "@/components/layout/Header";
import TopContent from "@/components/TopContent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="wrap">
        <TopContent />
        <ContentList />
      </div>
    </>
  );
}

"use client";

// hook
import { useContent } from "@/contexts/ContentContext";

// component
import PostPage from "./PostPage";
import Tab from "./tab/Tab";

export default function ContentList() {
  const content = useContent() || [];

  return (
    <>
      {content.map((item) => {
        return (
          <div
            key={item.id}
            id={item.id}
            data-aos={item.aosDataName ? item.aosDataName : "fade-down"}
            data-aos-duration={
              item.aosDataDuration ? item.aosDataDuration : 1000
            }
            className="content-item"
          >
            {item.type === "tab" ? (
              <Tab />
            ) : item.type === "slide" ? (
              <PostPage />
            ) : (
              <div>데이터 호출 실패</div>
            )}
          </div>
        );
      })}
    </>
  );
}

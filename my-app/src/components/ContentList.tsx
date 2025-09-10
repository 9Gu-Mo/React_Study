"use client";

// component
import { useContentPost } from "@/atoms/contentPosts";
import InquiryForm from "./InquiryForm";
import Intro from "./Intro";
import Tab from "./Tab";

export default function ContentList() {
  const posts = useContentPost();

  return (
    <>
      {posts.map((item) => {
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
            ) : item.type === "intro" ? (
              <Intro />
            ) : item.type === "form" ? (
              <InquiryForm />
            ) : (
              <div>데이터 호출 실패</div>
            )}
          </div>
        );
      })}
    </>
  );
}

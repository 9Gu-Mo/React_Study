"use client";

// component
import ContentItem from "./ContentItem";
import PostPage from "./PostPage";
import Tab from "./tab/Tab";

// environment variables

// interface type
import Image from "next/image";
import { ContentProps } from "./content.types";

// dummy data
const contentList: ContentProps[] = [
  {
    class: "content-item",
    dataName: "fade-up",
    dataDuration: 1000,
    children: (
      <div>
        content1
        <Image alt="ss" width={40} height={40} src={"./images/no-image.png"} />
      </div>
    ),
  },
  {
    class: "content-item",
    children: <Tab />,
  },
  {
    class: "content-item",
    dataName: "fade-right",
    children: <PostPage />,
  },
];

export default function ContentList() {
  return (
    <>
      {contentList.map((item, index) => (
        <ContentItem {...item} key={index} id={"content" + index}>
          {item.children}
        </ContentItem>
      ))}
    </>
  );
}

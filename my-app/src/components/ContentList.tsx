"use client";

// component
import ContentItem from "./ContentItem";
import PostPage from "./PostPage";
import Tab from "./tab/Tab";

// interface type
import { ContentProps } from "./content.types";

// dummy data
const contentList: ContentProps[] = [
  {
    class: "content-item",
    dataName: "fade-up",
    dataDuration: 1000,
    children: <div>content1</div>,
  },
  {
    class: "content-item",
    dataName: "fade-left",
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

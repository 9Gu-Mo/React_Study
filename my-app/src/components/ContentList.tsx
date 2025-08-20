"use client";

// component
import ContentItem from "./ContentItem";
import Customer from "./Customer";
import PostPage from "./PostPage";

// interface
import { ContentProps } from "./content.types";

// dummy data
const contentList: ContentProps[] = [
  {
    class: "content-item",
    dataName: "fade-right",
    dataDuration: 1000,
    children: <div>content1</div>,
  },
  {
    class: "content-item",
    dataDuration: 1000,
    children: <div>content2</div>,
  },
  {
    class: "content-item",
    children: <Customer />,
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

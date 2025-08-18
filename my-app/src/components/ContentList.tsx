"use client";

// component
import ContentItem from "./ContentItem";

// interface
import { ContentProps } from "./Content.types";

// dummy data
const contentList: ContentProps[] = [
  {
    class: "content-item",
    children: <div>content1</div>,
    dataDuration: 1000,
  },
  {
    class: "content-item",
    children: <div>content2</div>,
    dataName: "fade-left",
    dataDuration: 1000,
  },
  {
    class: "content-item",
    children: <div>content3</div>,
  },
  {
    class: "content-item",
    children: <div>content4</div>,
    dataName: "fade-right",
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

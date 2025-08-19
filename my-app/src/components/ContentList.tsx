"use client";

// component
import ContentItem from "./ContentItem";

// interface
import { ContentProps } from "./content.types";

// dummy data
const contentList: ContentProps[] = [
  {
    class: "content-item",
    dataDuration: 1000,
    children: <div>content1</div>,
  },
  {
    class: "content-item",
    dataName: "fade-left",
    dataDuration: 1000,
    children: <div>content2</div>,
  },
  {
    class: "content-item",
    children: <div>content3</div>,
  },
  {
    class: "content-item",
    dataName: "fade-right",
    children: <div>content4</div>,
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

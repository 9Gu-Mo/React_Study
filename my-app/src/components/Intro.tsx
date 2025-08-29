"use client";

// component
import Link from "next/link";

// interface
interface Attach {
  id: string;
  name: string;
  fileUrl: string;
}

const attachList: Attach[] = [
  {
    id: "id1",
    name: "test.tsx",
    fileUrl: "./files/test.txt",
  },
  {
    id: "id2",
    name: "agree.pdf",
    fileUrl: "./files/agree.pdf",
  },
  {
    id: "id3",
    name: "12.jpg",
    fileUrl: "./files/12.jpg",
  },
];

// style
import style from "@/styles/components/intro.module.scss";

export default function Intro() {
  return (
    <>
      <div className={style.attach}>
        {attachList.map((item) => {
          const reducer = String(item.fileUrl.split(".").pop());

          return (
            <Link
              href={item.fileUrl}
              key={item.id}
              className={
                reducer === "txt"
                  ? style.txt
                  : reducer === "pdf"
                  ? style.pdf
                  : style.etc
              }
              download
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

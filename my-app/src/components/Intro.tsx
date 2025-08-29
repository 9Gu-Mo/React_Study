"use client";

// component
import Link from "next/link";

// environment variables
import { CDN_BASE } from "@/constants/env";

// style
import style from "@/styles/components/intro.module.scss";

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
    fileUrl: `${CDN_BASE}/files/test.txt`,
  },
  {
    id: "id2",
    name: "agree.pdf",
    fileUrl: `${CDN_BASE}/files/agree.pdf`,
  },
  {
    id: "id3",
    name: "12.jpg",
    fileUrl: `${CDN_BASE}/files/12.jpg`,
  },
];

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

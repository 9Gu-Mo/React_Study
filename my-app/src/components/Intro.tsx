"use client";

// component
import Link from "next/link";

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
    name: "test",
    fileUrl: `/files/test.txt`,
  },
  {
    id: "id2",
    name: "agree",
    fileUrl: `/files/agree.pdf`,
  },
  {
    id: "id3",
    name: "12",
    fileUrl: `/files/12.jpg`,
  },
  {
    id: "id4",
    name: "avast",
    fileUrl: `/files/avast.exe`,
  },
  {
    id: "id5",
    name: "rad",
    fileUrl: `/files/rad.xlsx`,
  },
  {
    id: "id6",
    name: "tvut",
    fileUrl: `/files/tvut.docx`,
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
              download
              className={
                reducer === "txt"
                  ? style.txt
                  : reducer === "pdf"
                  ? style.pdf
                  : reducer === "xlsx" || reducer === "xls"
                  ? style.xls
                  : reducer === "docx" || reducer === "doc"
                  ? style.doc
                  : reducer === "ppt"
                  ? style.ppt
                  : style.etc
              }
            >
              {`${item.name}.${reducer}`}
            </Link>
          );
        })}
      </div>
    </>
  );
}

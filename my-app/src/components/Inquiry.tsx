"use client";

// component
import Link from "next/link";

// hook
import { useEffect, useState } from "react";

// api
import { NoticeAPI } from "@/api/noticeApi";

// interface type
interface List {
  id: string;
  userName: string;
  title: string;
  date: string;
}

export default function Inquiry() {
  // 호출한 api 렌더링 저장
  const [loading, setLoading] = useState(true);

  // api 호출 성공, 실패 확인
  const [error, setError] = useState<string | null>(null);

  // NoticeBoard api 저장
  const [notice, setNotice] = useState<List[]>([]);

  // api 호출
  useEffect(() => {
    // const controller = new AbortController();

    // (async () => {
    //   try {
    //     const res = await fetch(CRUD.NOTICE, { signal: controller.signal });
    //     // if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
    //     const data = await res.json();
    //     setNotice(data);
    //   } catch (e: unknown) {
    //     if (e !== "AbortError") {
    //       setError("데이터 불러오기 실패");
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
    // })();

    // return () => controller.abort();

    const fetchInput = async () => {
      // try {
      //   const res = await fetch(CRUD.NOTICE);

      //   const data = await res.json();
      //   setNotice(data);
      // } catch (err: unknown) {
      //   if (err instanceof Error) {
      //     setError(err.message);
      //   } else {
      //     setError("에러 발생");
      //   }
      // } finally {
      //   setLoading(false);
      // }
      try {
        const data = await NoticeAPI.getAll();
        setNotice(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("에러 발생");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInput();
  }, []);

  // list 제거 함수
  const onClickDelete = async (id: string) => {
    // try {
    //   if (window.confirm("삭제 하시겠습니까?")) {
    //     await fetch(`${CRUD.NOTICE}/${id}`, { method: "DELETE" });
    //     setNotice((prev) => prev.filter((item) => item.id !== id));
    //   } else {
    //     console.log("삭제 취소");
    //   }
    // } catch (err: unknown) {
    //   if (err instanceof Error) {
    //     setError(err.message);
    //   } else {
    //     setError("오류 발생");
    //   }
    // }
    try {
      if (window.confirm("삭제 하시겠습니까?")) {
        await NoticeAPI.delete(id);
        setNotice((prev) => prev.filter((n) => n.id !== id));
        alert("삭제 완료");
      } else {
        alert("삭제 취소");
      }
    } catch (err) {
      console.error("삭제 실패 : ", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>에러 발생 : {error}</p>;

  return (
    <>
      {notice.length > 0 ? (
        <ul>
          {notice.map((item, index) => (
            <li id={item.id} key={item.id}>
              <span>{index + 1}</span>
              <span>{item.userName}</span>
              <Link href={""}>{item.title}</Link>
              <span>{item.date}</span>
              <button
                type="button"
                onClick={() => {
                  onClickDelete(item.id);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>등록된 데이터 없음</div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
// hook
import { useEffect, useState } from "react";

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
    const fetchNotice = async () => {
      try {
        const res = await fetch(
          "https://68b62cb1e5dc090291b1085c.mockapi.io/api/testv2/NoticeBoard"
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setNotice(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("예상치 못한 에러 발생 ㅎㅎ");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, []);

  // list 제거 함수
  const onClickDelete = async (id: string) => {
    try {
      const res = await fetch(
        `https://68b62cb1e5dc090291b1085c.mockapi.io/api/testv2/NoticeBoard/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      setNotice((prev) => prev.filter((item) => item.id !== id));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("오류 발생");
      }
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

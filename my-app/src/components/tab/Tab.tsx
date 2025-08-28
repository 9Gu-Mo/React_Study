"use client";

// component
import Image from "next/image";
import Link from "next/link";

// hook
import { useEffect, useState } from "react";

// style
import style from "@/styles/components/Tab.module.scss";

// interface type
interface Customer {
  id: string;
  name: string;
  age: number;
  address: Address;
  registration: string;
  gender: string;
  profileImg: ProfileImg;
  tel: string;
  property: string;
  gitUrl: string;
  email: string;
}

// address object
interface Address {
  coutry: string;
  postalCode: string;
  state: string;
  city: string;
  district: string;
  street: string;
  buildingNumber: string;
  detailAddress: string;
}

// profile img object
interface ProfileImg {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export default function Tab() {
  // 호출한 api 렌더링 저장
  const [loading, setLoading] = useState(true);

  // api 호출 성공, 실패 확인
  const [error, setError] = useState<string | null>(null);

  // customer api 배열 저장
  const [customer, setCustomer] = useState<Customer[]>([]);

  // 탭 활성화 상태값 저장
  const [active, setActive] = useState<string>("");

  // customer api 호출 후 active 값 설정
  useEffect(() => {
    // 배열의 값이 있으면 데이터가 들어온걸로 판단
    if (customer.length > 0 && !active) {
      setActive(customer[0].id);
    }
  }, [customer, active]);

  // 클릭한 탭 id값 저장
  const tabClick = (id: string) => {
    setActive(id);
  };

  // customer api 호출
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        // 호출 성공
        const res = await fetch(
          "https://68a51b842a3deed2960c6b0a.mockapi.io/api/testv1/Customer"
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setCustomer(data);
      } catch (err: unknown) {
        // 호출 실패
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("예상치 못한 에러 발생 ㅎㅎ");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>에러 발생 : {error}</p>;

  return (
    <>
      {/* tab btn */}
      <div className={style.tabBtn}>
        {customer.map((item) => (
          <button
            key={item.id}
            id={item.id}
            type="button"
            onClick={() => tabClick(item.id)}
            className={`${style.tabBtnItem} ${
              active === item.id ? style.active : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div className={style.tabContent}>
        {/* 클릭한 탭 버튼의 id값과 동일한 데이터 호출 */}
        {customer
          .filter((item) => item.id === active)
          .map((item) => (
            <div key={item.id} id={item.id}>
              <Image
                alt={item.profileImg.alt}
                width={item.profileImg.width}
                height={item.profileImg.height}
                src={item.profileImg.url}
              />
              <div className={style.detail}>
                <span>{item.age}</span>
                <span>
                  <a href={`tel:${item.tel}`}>{`tel : ${item.tel}`}</a>
                </span>
                <span>
                  <a href={`sms:${item.tel}`}>{`sms : ${item.tel}`}</a>
                </span>
                <span>
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </span>
                <span>
                  {item.registration.replace(/^(\d{6})-(\d{7})$/, "$1-*******")}
                </span>
                <span>{item.gender}</span>
                <div className={style.address}>
                  {/* object type 데이터 반복문 */}
                  {Object.entries(item.address).map(([index, addr]) => (
                    <span key={index}>{addr}</span>
                  ))}
                </div>
                <Link target="_blink" href={item.gitUrl}>
                  {item.gitUrl}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

"use client";

// hook
import { useEffect, useState } from "react";

// component
import Image from "next/image";
import Link from "next/link";

// style
import style from "@/styles/components/Customer.module.scss";

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  coutry: string;
}

interface Customer {
  id: string;
  name: string;
  age: number;
  address: Address;
  registration: string;
  gender: string;
  profile: string;
  tel: string;
  property: string;
}

export default function Customer() {
  const [customer, setCustomer] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const maskName = (name: string) => {
    return (
      name
        // name 데이터 공백 체크
        .split(" ")
        // string타입의 데이터를 배열로 변환
        .map((word) =>
          // name 배열의 개수를 체크하여 1개 이상이면 마스킹 진행
          word.length > 1 ? word[0] + "*".repeat(word.length - 1) : word
        )
        // 배열 타입의 name 데이터를 문자열로 변경
        .join(" ")
    );
  };

  // 자산 데이터를 배열로 변환 후 3글자 마다 , 추가
  const replaceProperty = (property: string) => {
    const unit = property.replace(/[0-9,]/g, "");
    // const numberStr = property.replace(/[원$,]/g, "");
    const numberStr = property.replace(/,$/g, "");

    console.log("numberStr :" + numberStr);
    console.log("unit : " + unit);

    const priceStr = parseInt(numberStr);
    const price = priceStr.toLocaleString();

    return price + unit;
  };

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await fetch(
          "https://68a51b842a3deed2960c6b0a.mockapi.io/api/testv1/Customer"
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setCustomer(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("에러에러");
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
      {customer.map((cus) => (
        <div className={style.customer} key={cus.id}>
          <Link href="#">
            <Image alt="ss" width={40} height={40} src={cus.profile} />
          </Link>
          <div>
            <span>{maskName(cus.name)}</span>
            <span>{cus.age}</span>
            {Object.entries(cus.address).map(([index, value]) => (
              <span key={index}>{value}</span>
            ))}
            <span>
              {cus.registration.replace(/^(\d{6})-(\d{7})$/, "$1-*******")}
            </span>
            <span>{cus.gender === "male" ? "남" : "여"}</span>
            <span>
              {cus.tel.replace(/^(\d{3})-(\d{4})-(\d{4})$/, "$1-$2-****")}
            </span>
            <span>{replaceProperty(cus.property)}</span>
          </div>
        </div>
      ))}
    </>
  );
}

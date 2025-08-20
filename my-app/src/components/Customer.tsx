"use client";

import { useEffect, useState } from "react";

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
}

export default function Customer() {
  const [customer, setCustomer] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        <div key={cus.id}>
          <span>{cus.name}</span>
          <span>{cus.age}</span>
          {Object.entries(cus.address).map(([index, value]) => (
            <span key={index}>{value}</span>
          ))}
          <span>{cus.registration}</span>
          <span>{cus.gender}</span>
        </div>
      ))}
    </>
  );
}

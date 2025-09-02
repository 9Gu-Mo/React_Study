"use client";

// hook
import { useState } from "react";

// component
import Form from "./form/Form";
import Input from "./form/Input";
import Textarea from "./form/Textarea";

interface Post {
  title: string;
  userName: string;
  content: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<Post>({
    title: "",
    userName: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(
      "https://68b62cb1e5dc090291b1085c.mockapi.io/api/testv2/NoticeBoard",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    setFormData({ title: "", content: "", userName: "" });
  };

  return (
    <Form id="form" onSubmit={handleSubmit}>
      <Input
        id="userName"
        type="text"
        placeholder="name"
        name="userName"
        label="user name"
        clear
        required
        value={formData.userName}
        onChange={handleChange}
      />
      <Input
        id="title"
        type="text"
        placeholder="title"
        name="title"
        label="title"
        clear
        required
        value={formData.title}
        onChange={handleChange}
      />
      <Textarea
        id="content"
        placeholder="내용내용내용"
        label="content"
        name="content"
        count={0}
        min={10}
        max={1000}
        required
        value={formData.content}
        onChange={handleChange}
      />
      <button type="submit">작성 완료</button>
      {/* <div>
        <Input
          id="pw"
          type="password"
          name="pw01"
          label="user pw"
          clear
          required
        />
        <button type="submit">입력 데이터 저장</button>
      </div> */}
    </Form>
  );
}

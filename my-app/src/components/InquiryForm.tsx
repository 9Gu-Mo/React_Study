// component
import Form from "./form/Form";
import Input from "./form/Input";
import Textarea from "./form/Textarea";

export default function InquiryForm() {
  return (
    <Form id="form">
      <Input
        id="userName"
        type="text"
        placeholder="name"
        name="userName"
        label="user name"
        clear
        required
      />
      <Input
        id="title"
        type="text"
        placeholder="title"
        name="title"
        label="title"
        clear
        required
      />
      <Textarea
        id="content"
        placeholder="내용내용내용"
        label="content"
        count={0}
        max={1000}
        required
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

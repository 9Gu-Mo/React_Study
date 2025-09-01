import Form from "./form/Form";
import Input from "./form/Input";

export default function InquiryForm() {
  return (
    <Form id="form">
      <Input id="id" type="text" name="id01" label="user id" clear required />
      <Input
        id="pw"
        type="password"
        name="pw01"
        label="user pw"
        clear
        required
      />
      <button type="submit">입력 데이터 저장</button>
    </Form>
  );
}

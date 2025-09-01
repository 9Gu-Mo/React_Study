import Form from "./form/Form";
import Input from "./form/Input";

export default function InquiryForm() {
  return (
    <Form id="form">
      <Input id="id" type="text" name="id01" label="user id" clear />
      <Input id="pw" type="password" name="pw01" label="user pw" clear />
    </Form>
  );
}

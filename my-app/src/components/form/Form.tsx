import { FormProps } from "@/types/common.types";

export default function Form(props: FormProps) {
  return (
    <>
      <form
        onSubmit={props.onSubmit}
        id={props.id}
        action={props.action}
        method={props.method}
      >
        {props.children}
      </form>
    </>
  );
}

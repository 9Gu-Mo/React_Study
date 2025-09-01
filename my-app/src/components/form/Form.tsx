import { FormProps } from "@/types/common.types";

export default function Form(props: FormProps) {
  return (
    <>
      <form id={props.id} action={props.action} method={props.method}>
        {props.children}
      </form>
    </>
  );
}

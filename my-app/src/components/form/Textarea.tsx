"use client";

// interface type
import { FormProps } from "@/types/common.types";

// style
import style from "@/styles/components/form/Form.module.scss";

export default function Textarea(props: FormProps) {
  return (
    <>
      <div className={`inp ${props.class}`}>
        <label className="inp-label" htmlFor={props.id}>
          {props.label}
          {props.required && <span className={style.req}>*</span>}
        </label>
        <div className={`inp-inner ${style.textarea}`}>
          <textarea
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            required={props.required}
            minLength={props.min}
            maxLength={props.max}
            value={props.value}
            onChange={props.onChange}
          ></textarea>
          <div className={style.count}>
            <span>{props.count}</span>
            <span>/</span>
            <span>{props.max}</span>
          </div>
        </div>
      </div>
    </>
  );
}

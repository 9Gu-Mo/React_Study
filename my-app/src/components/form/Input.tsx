"use client";

// hook
import { useState } from "react";

// component
import IconClose from "../icon/IconClose";

// interface type
import { FormProps } from "@/types/common.types";

export default function Input(props: FormProps) {
  const [text, setText] = useState<string>("");

  const onClear = () => {
    setText("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setText(target.value);
  };

  return (
    <>
      <div className={`inp ${props.class ? props.class : ""}`}>
        {props.label && (
          <label className="inp-label" htmlFor={props.id}>
            {props.label}
          </label>
        )}
        <div className="inp-inner">
          <input
            id={props.id}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={text}
            onChange={onChange}
          />
          {text.length > 0 && props.clear ? (
            <button type="button" className="inp-clear" onClick={onClear}>
              <IconClose size={16} />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

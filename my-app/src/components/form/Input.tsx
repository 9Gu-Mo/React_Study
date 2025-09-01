"use client";

// hook
import { useRef, useState } from "react";

// component
import IconClose from "../icon/IconClose";

// interface type
import { FormProps } from "@/types/common.types";

// style
import style from "@/styles/components/form/Form.module.scss";
import IconEye from "../icon/IconEye";
import IconEyeClose from "../icon/IconEyeClose";

export default function Input(props: FormProps) {
  const [text, setText] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const inpRef = useRef<HTMLInputElement>(null);

  // input 입력 데이터 초기화
  const onClear = () => {
    setText("");
  };

  // 사용자 입력 값 value에 저장
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setText(target.value);
  };

  // 비밀번호 암호화 노출, 비노출
  const onPwToggle = () => {
    // const inp = inpRef.current;

    // if (inp) {
    //   if (inp.type == "password") {
    //     inp.type = "text";

    //     setIsVisible(true);
    //   } else {
    //     inp.type = "password";

    //     setIsVisible(false);
    //   }
    // }

    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className={`inp ${props.class ? props.class : ""}`}>
        {props.label && (
          <label className="inp-label" htmlFor={props.id}>
            {props.label}
            {props.required && <span className={style.req}>*</span>}
          </label>
        )}
        <div className="inp-inner">
          <div>
            <input
              id={props.id}
              type={
                props.type === "password"
                  ? isVisible
                    ? "text"
                    : "password"
                  : props.type
              }
              name={props.name}
              placeholder={props.placeholder}
              disabled={props.disabled}
              required={props.required}
              value={text}
              onChange={onChange}
              ref={inpRef}
            />
            {/* input에 입력받은 value값 체크 & clear props가 있을 경우 초기화 버튼 노출 */}
            {text.length > 0 && props.clear ? (
              <button type="button" className="inp-clear" onClick={onClear}>
                <IconClose size={16} />
              </button>
            ) : (
              ""
            )}
          </div>
          {/* password 인풋인 경우 버튼 노출 */}
          {props.type === "password" && (
            <button type="button" onClick={onPwToggle}>
              {isVisible ? <IconEyeClose /> : <IconEye />}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

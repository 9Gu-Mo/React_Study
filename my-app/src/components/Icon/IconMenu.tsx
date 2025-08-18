// interface
import { IconProps } from "@/types/common.types";

export default function IconMenu(props: IconProps) {
  return (
    <>
      <svg
        width={props.size ? props.size : "24px"}
        height={props.size ? props.size : "24px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke={props.color ? props.color : "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

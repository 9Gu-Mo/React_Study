import Image from "next/image";

export default function TopContent() {
  return (
    <>
      <Image
        className="content-top"
        src="https://cdn.jsdelivr.net/gh/9Gu-Mo/React_Study@main/my-app/public/images/bg/bg.jpg"
        width={1920}
        height={1280}
        alt=""
      />
    </>
  );
}

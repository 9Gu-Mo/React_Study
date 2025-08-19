import Image from "next/image";

export default function TopContent() {
  return (
    <>
      <Image
        className="content-top"
        src="/images/bg/bg.jpg"
        width={1920}
        height={1280}
        alt=""
      />
    </>
  );
}

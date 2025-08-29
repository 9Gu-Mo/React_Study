// component
import Image from "next/image";

// environment variables
import { CDN_BASE } from "@/constants/env";

export default function TopContent() {
  return (
    <>
      <Image
        className="content-top"
        src={`${CDN_BASE}/images/bg/bg.jpg`}
        width={1920}
        height={1280}
        alt=""
      />
    </>
  );
}

import Image from "next/image";
import intro2 from "@/components/assets/docs/intro2.png";

export const runtime = "edge";

export default function Faq() {
  return (
    <div>
      <Image
        src={intro2}
        width="800"
        height="400"
        alt="Avatar"
        placeholder="blur"
      />
    </div>
  );
}

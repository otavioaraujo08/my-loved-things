import Image from "next/image";
import Header from "./layout/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-40 w-full h-full min-h-screen bg-[#F8F2E1]">
      <Header />

      <div className="flex flex-row items-center">
        <Image
          src="/images/humamuruHappy.png"
          alt="happy image mood"
          width={250}
          height={250}
        />

        <div className="text-center">
          <h1 className="text-[3rem] lg:text-[4rem] xl:text-[6rem] font-bold font-notoSansKorean tracking-widest">
            Mood
          </h1>
          <h1 className="text-[2.5rem] lg:text-[3.5rem] xl:text-[5.5rem] font-bold font-notoSansKorean tracking-widest">
            Diário
          </h1>
        </div>

        <Image
          src="/images/humamuruPlaying.png"
          alt="Joy image mood"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}

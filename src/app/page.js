import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex pt-10 items-center justify-center font-sanscode">
        <h1 className="flex flex-col items-center text-6xl sm:text-9xl font-bold uppercase tracking-normal leading-none select-none ">
          <span className="relative">
            <span className="absolute -left-10 sm:-left-16 top-1/2 -translate-y-1/2 text-4xl sm:text-6xl font-medium drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              &lt;
            </span>
            Software
          </span>
          <span className="relative">
            Engineer
            <span className="absolute -right-14 sm:-right-22 bottom-1 text-4xl sm:text-6xl font-medium drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              /&gt;
            </span>
          </span>
        </h1>
      </div>
      <div className="flex justify-center -mt-10">
        <Image
          src="/images/Dummy.png"
          className="w-[15%] h-3/12"
          width={30}
          height={30}
          alt="arham picture "
        />
      </div>
    </div>
  );
}

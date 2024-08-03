"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function redirectToSports() {
    router.push("/esportes");
  }

  function redirectToFood() {
    router.push("/comida");
  }

  function redirectToEntertainment() {
    router.push("/entretenimento");
  }

  return (
    <div className="w-full h-16 flex flex-row justify-around items-center">
      <h1 className="text-slate-700 font-serif font-bold text-sm md:text-base lg:text-xl">
        Otavinho Loved Things
      </h1>

      <ul className="flex flex-row gap-5">
        <li
          className="font-medium text-slate-500 font-serif text-sm md:text-base lg:text-xl cursor-pointer hover:text-orange-700"
          onClick={redirectToSports}
        >
          Esportes
        </li>
        <li
          className="font-medium text-slate-500 font-serif text-sm md:text-base lg:text-xl cursor-pointer hover:text-orange-700"
          onClick={redirectToFood}
        >
          Comida
        </li>
        <li
          className="font-medium text-slate-500 font-serif text-sm md:text-base lg:text-xl cursor-pointer hover:text-orange-700"
          onClick={redirectToEntertainment}
        >
          Entretenimento
        </li>
      </ul>
    </div>
  );
}

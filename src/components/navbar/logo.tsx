import Image from "next/image";

export default function Logo () {
  return (
    <>
      <Image src="/logo.png" width={40} height={40} alt="Pokedex Logo" />
      <span className="ml-2 font- font-light tracking-wider text-white">Pokedex</span>
    </>
  )
}
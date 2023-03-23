import Image from "next/image";

export default function Hero () {
  return (
    <div className="hero bg-amber-400">
      <div className="text-center hero-content">
        <Image src="/headline.png" width={430} height={160} alt="headline" />
      </div>
    </div>
  )
}
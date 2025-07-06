'use client'

export default function OceanQuote() {
  return (
    <section
      className="relative bg-cover bg-center text-center px-4 h-[60vh] sd:h-[30vh] flex items-center justify-center brightness-130"
      style={{ backgroundImage: "url('/ocean.jpg')" }}
    >
      {/* Brightness Overlay */}
      <div className="absolute inset-0 brightness-110 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-[#000]">
        <p className="text-[30px] md:text-[32px] font-normal leading-relaxed mt-[50px] sd:mt-[90px]">
          “I have come to believe that caring for myself is not self-indulgent.<br />
          Caring for myself is an act of survival.”
        </p>
        <p className="pt-[50px] sd:pt-[90px] text-[20px] md:text-[18px] text-[#444] font-light">
          <br />— Audre Lorde
        </p>
      </div>
    </section>
  )
}

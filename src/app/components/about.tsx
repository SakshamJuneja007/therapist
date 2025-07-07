'use client'
import Image from 'next/image'
import './about.css'

export default function About() {
  return (
    <>
      <section className="about-container bg-aliceblue">
        {/* Left: Text */}
        <div className="about-text text-[#7e7e6b] text-[19.2px] font-light leading-[34.56px] font-sans-serif-100">
          <div className="m-40"></div>

          <h2 className="text-[#7e7e6b] inline text-[35.2px] font-bold mb-6 font-FreightDispProBlack">
            About Dr. Jennifer Hahm
          </h2>

          <p className="mb-4">
            <br /> Finding time and opportunities to care for ourselves can be incredibly <br />
            challenging in today’s busy and demanding world. I believe therapy <br />
            offers a dedicated space for self-care, providing the support and tools <br />
            needed to improve this essential practice. Therapy can help <br />
            individuals identify and clarify their goals, values, and the various <br />
            elements that contribute to their well-being, recognizing that these <br />
            aspects vary from person to person.
          </p>

          <p className="mb-4">
            <br />
            I am dedicated to supporting this journey by offering active listening, <br />
            psychological knowledge, empathy, compassion, and insights into <br />
            behavioral patterns and tendencies. I hold a master’s degree in Clinical <br />
            Psychology from the Michigan School of Psychology (2012) and a <br />
            Ph.D. in Counseling Psychology from Western Michigan University <br />
            (2018). My experience spans therapy and psychological assessment in <br />
            psychiatric inpatient units, academic medical centers, universities, and <br />
            outpatient practice settings.
          </p>

          <p className="mb-4">
            <br />
            My therapeutic approach is primarily psychodynamic and humanistic, <br />
            enriched by influences from positive psychology, existentialism, family <br />
            systems theory, acceptance and commitment concepts, and mindfulness practices.
          </p>
        </div>

        {/* Right: Image */}
        <div className="about-image">
          <Image
            src="/jennifer2.jpg"
            alt="Dr. Jennifer Hahm"
            width={360}
            height={500}
            className="object-cover rounded-md shadow-md mt-2 w-[431px] h-[647px]"
          />
        </div>
      </section>

      {/* Horizontal Line at the very end, after the full layout */}
<div className="w-[95%] mx-auto mt-10 mb-[100px]">
  <hr className="border-t-2 border-black" />
</div>

    </>
  )
}

'use client'
import './focus.css'
import Image from 'next/image'

export default function TherapySection() {
  return (
    <section className="bg-[#f3f0e8] px-6 py-24 text-center container">
      {/* Heading */}
<h2 className="text-[36px] md:text-[42px] text-[#41413f] mb-8 mt-10 custom-heading">
  Therapy can be a space where you invest in yourself—<br />
  one of the highest forms of self-care.
</h2>

      {/* Paragraph */}
      <p className="text-[20px] leading-[-2px] text-[#4b4a47] max-w-4xl mx-auto mb-14 font-light  paragraph">
        <br /><br />You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss,
        self-esteem issues, <br /> or challenges with family, parenting, or parental relationships. Whatever the source of
        your stress, you don’t have to face it <br /> alone. Therapy offers you the time and space to work toward wellness
        and peace.
      </p>

      {/* Horizontal Divider */}
      <div className="w-[90%] h-[1px] bg-black mx-auto mb-14 "></div>

     <div className="w-[95%] mx-auto mt-10 mb-[100px] h">
  <hr className="border-t-2 border-[#383838]" />
</div>
 

      {/* Subheading */}
      <h3 className="text-[36px] md:text-[52px] text-[#41413f] mb-8 mt-10 sub">
        Areas of Focus
      </h3>
 <div className="focus-grid">
        {/* Card 1 */}
        <div className="text-center">
          <div className="circle-image mb-6">
            <Image src="/1.jpg" alt="Healthcare Providers" width={300} height={300} className="object-cover w-full h-full" />
          </div>
          <h4 className="card-heading mb-4">Therapy for Healthcare Providers and Students</h4>
          <p className="card-paragraph leading-[20px]">
<br />The care you provide for others may be driving you to seek <br /> therapy, whether due to burnout, compassion fatigue,<br /> imposter syndrome, people-pleasing tendencies, or <br />perfectionism. Whether you're in pre-professional school,<br /> undergoing training, or reflecting on a long career in <br /> healthcare, we can address the unique stressors of your <br />professional environment along with any challenges you <br />may be facing in other areas of your life.          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="circle-image mb-6">
            <Image src="/2.jpg" alt="Trauma and Grief" width={300} height={300} className="object-cover w-full h-full" />
          </div>
          <h4 className="card-heading mb-4">Therapy for Trauma and Grief</h4>
          <p className="card-paragraph">
          <br /> Life's challenges, whether a difficult childhood, a traumatic <br /> event or series of events, or the loss of someone or <br />something deeply meaningful, can lead to profound <br />experiences of trauma and grief. Therapy offers a supportive <br />space to process these experiences, care for yourself amidst <br />painful thoughts and emotions, and work toward a sense ofbr
           grounding and meaning.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="circle-image mb-6">
            <Image src="/3.jpg" alt="Immigrant Individuals" width={300} height={300} className="object-cover w-full h-full" />
          </div>
          <h4 className="card-heading mb-4">Therapy for Immigrant Individuals</h4>
          <p className="card-paragraph">
          <br /> Second-generation individuals in immigrant families, born in <br /> the U.S. to at least one parent born abroad, often navigate <br />the complexities of multiple cultures and diverse <br />expectations. This experience can bring challenges such as <br />feeling like a foreigner in your own country and navigating <br />strained family relationships. Therapy offers a supportive <br /> space to explore and process this unique aspect of your br identity.
          </p>
        </div>
      </div>
    </section>
  )
}    
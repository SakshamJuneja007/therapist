'use client'
import './footer.css'

export default function Footer() {
  return (
    <footer className="bg-[#f7f4ed] text-center px-6 text-[#3b3a36] font-freight py-32 min-h-[600px]">
      
      {/* Name */}
      <h2 className="text-[#41413f] font-freight text-[35.2px] font-light leading-[46.91px] mb-8 custom-headings mt-[40px]">
        <br />Jennifer Hahm, Ph.D., Licensed Psychologist
      </h2>

      {/* Contact Info */}
<div className="space-y-3 mb-10 text-center text-black">
  <p>
<a
  href="mailto: serena@blakepsychology.com"
  className="email-link inline-block"
>
  <br /> serena@blakepsychology.com
</a>
  </p>
        <p className="font-freightSans text-[19px] font-light">
          <br />Phone:{' '}
          <a
            href="tel:(323) 555-0192"
            className="underline decoration-1 underline-offset-4"
          >
           (323) 555-0192
          </a>{' '}
          Fax: (323) 555-0192
        </p>
        <p className="font-freightSans text-[19px] font-light">
         <br /> 1287 Maplewood Drive, Los Angeles, CA 90026
        </p>
      </div>

      {/* Navigation Links */}
      <div className="footer-links mb-12 space-x-6 text-center">
  <a
    href="#"
    className="underline underline-offset-4 decoration-1 text-black"
  >
    Home 
  </a>
  <a
    href="#"
    className="underline underline-offset-4 decoration-1 text-black"
  >
    Privacy Policy  
  </a>
  <a
    href="#"
    className="underline underline-offset-4 decoration-1 text-black "
  >
    Good Faith Estimate
  </a>
</div>


      {/* Client Portal */}
      <div className="mb-12">
        <a
          href="#"
          className="underline text-[17px] font-freightSans decoration-1 underline-offset-4"
        >
         <br /> Client Portal
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-[#4b4a47] font-freightSans mt-[30px]">
       <br /> © 2025 Dr. Serena Blake, PsyD (Clinical Psychologist) All rights reserved.
      </p>
    </footer>
  )
}

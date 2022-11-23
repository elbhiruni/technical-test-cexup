export default function Hero() {
  return(
    <div className="flex justify-between pt-10">
      <div className="max-w-[50%]">
        <h1 className="text-[#008CA3] text-4xl font-bold">Providing Easy Access to Healthcare for Everyone</h1>
        <p className="text[#616161] mt-4">Cexup is providing White Label application for empowering Hospitals & Clinics Through Innovative Integrated Telemedicine & Digital Medical Check Up application with IoMT & AI that integrate to Hospital Information System</p>
        <div className="flex w-fit bg-[#008CA3] py-[16px] px-[28px] mt-10 rounded-3xl text-white gap-x-2 font-medium">
          <img src="https://cexup.com/_nuxt/img/stethoscope.fb76b0d.svg" />
          <span>Set Demo</span>
        </div>
      </div>
      <div className="relative max-w-xs">
        <img className="w-full" src="https://cexup.com/_nuxt/img/image-hero.e3c6827.png" />
        <div className="absolute bg-white flex flex-col bottom-0 rounded-lg py-4 px-6">
          <div className="rounded-full w-12 overflow-hidden">
            <img className="w-full" src="https://cexup.com/_nuxt/img/card-doctor-image.e9e769e.png" />
          </div>
          <p className="font-medium">Dr. Shimanta</p>
          <p className="text-[#616161]">Cardiologist</p>
          <div className="text-white font-medium bg-[#008CA3] rounded-3xl">Make Schedule</div>
        </div>
      </div>
    </div>
  )
}
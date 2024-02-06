import Image from 'next/image'
import ComingSoon from '@statics/banner-coming-soon.jpg'
export default function Home() {
  return (
    <div className="mx-auto relative w-full flex justify-center flex-col">
      <div className='mx-auto h-[750px] w-full relative'>
        <Image src={ComingSoon} className="object-cover" fill />
      </div>
      <div className="w-full bg-[#eeeeee] absolute bg-opacity-75 h-full flex flex-col">
        <div 
          className='font-bold text-3xl py-5 text-white mx-auto text-center shadow-md w-full' 
          style={{
            background: 'linear-gradient(180deg, rgba(112,187,173,1) 0%, rgba(138,194,157,1) 48%, rgba(50,114,129,0.9641106442577031) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          We are opening soon
        </div>

        {/* <div className="text-[#da616b] font-semibold text-2xl text-center transform -translate-y-[120px] justify-center flex-1 w-full items-center flex">One Stop Occupational Health-Safety & Enviromental Services</div> */}
      </div>
    </div>
  )
}

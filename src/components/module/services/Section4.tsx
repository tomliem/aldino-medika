import MainBanner from '@statics/banner-utama.jpg'
import { menuKey } from '@/constants/menus'
import Image from 'next/image'

const ServiceCard = ({ img, title, desc }: { img: string; title: string; desc: string }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="w-full h-64 relative">
        <Image alt="Services" src={img} style={{ objectFit: 'cover' }} fill />
      </div>
      <div className="absolute bottom-0 group-hover:hidden left-0 w-full">
        <div className="px-4 py-2 group-hover:bg-primary-blue bg-primary-dark text-primary-yellow text-center text-lg font-bold">
          {title}
        </div>
      </div>
      <div className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition left-0">
        <div className="px-4 py-2 group-hover:bg-primary-blue bg-primary-dark border-b-2 text-primary-yellow text-center text-lg font-bold">
          {title}
        </div>
        <div className="bg-primary-blue -none text-white text-center p-4">{desc}</div>
      </div>
    </div>
  )
}
const services = [
  {
    img: '/services-transhipment.jpg',
    title: 'Transhipment',
    desc: 'Seamlessly transfer goods between different transportation modes or vessels during their journey from origin to destination, ensuring efficient and uninterrupted logistics.',
  },
  {
    img: '/services-break.jpg',
    title: 'Consolidation and Break-Bulk',
    desc: 'Streamline shipping processes by consolidating smaller shipments into larger ones for cost-effective transportation or breaking down large shipments into smaller units for easier distribution.',
  },
  {
    img: '/services-forward.jpg',
    title: 'Transportation and Project Forwarding',
    desc: 'Facilitate the movement of goods using various transport modes, and specialize in managing complex or oversized cargo logistics with meticulous planning for successful delivery.',
  },
  {
    img: '/services-door.jpg',
    title: 'Door-to-Door Services',
    desc: `Provide end-to-end logistics solutions, managing the entire shipping process from the sender's location to the recipient's doorstep, ensuring hassle-free transport, including customs clearance and documentation.`,
  },
  {
    img: '/services-sea-air.jpg',
    title: 'International Forwarding (by air and sea)',
    desc: `Specialize in international shipping services, ensuring efficient and compliant transportation of goods across borders by air or sea freight, handling all logistics intricacies and legal requirements.`,
  },
  {
    img: '/services-customs.jpg',
    title: 'Customs Brokerage and Documentation',
    desc: `Expertly manage the necessary paperwork, regulatory compliance, and customs clearance essential for importing or exporting goods across international borders, ensuring smooth and lawful transportation.`,
  },
]
export const Section4 = () => {
  return (
    <div id={menuKey[2]} className="w-full mt-8 px-4 items-center flex flex-col">
      <h1 className="text-center text-3xl text-primary-yellow font-bold">Our Services</h1>
      <p className="px-2 text-justify md:px-8 mt-2">
        At Aldino Freight and Traiding, we offer a comprehensive suite of services designed to optimize supply chain
        logistics, minimize costs, and ensure the timely and secure delivery of goods worldwide. With our expertise in
        freight and trading, we facilitate seamless trade and transportation solutions for our valued clients.
      </p>
      <div className="mt-8 w-full max-w-7xl">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
          {services.map((x) => {
            return (
              <div className="col-span-4" key={x.title}>
                <ServiceCard {...x} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { Section1 } from '@/components/module/home/Section1'
import Section2 from '@/components/module/home/Section2'
export default function Home() {
  return (
    <div className="mx-auto relative w-full">
      <Section1 />
      <Section2 />
    </div>
  )
}

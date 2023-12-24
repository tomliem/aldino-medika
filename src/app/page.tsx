import Image from 'next/image'
import { Section1 } from '@/components/module/home/Section1'
import { Section2 } from '@/components/module/home/Section2'
import { Section3 } from '@/components/module/home/Section3'
import { Divider } from '@mui/material'
import { Section4 } from '@/components/module/home/Section4'
import { Section5 } from '@/components/module/home/Section5'
export default function Home() {
  return (
    <div className="mx-auto relative w-full">
      <Section1 />
      <Section2 />
      <Divider className="mt-12" />
      <Section3 />
      <Divider className="mt-12" />
      <Section4 />
      <Divider className="mt-12" />
      <Section5 />
    </div>
  )
}

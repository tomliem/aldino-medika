import './footer.css'

import { Whatsapp } from '@/components/base/Whatsapp';
import LogoImage from '@statics/logo.jpeg'
import Image from 'next/image'
import { email, phone, waUrl } from '@/constants/agent'

type FooterProps = {
  agent: keyof typeof waUrl
}
const Footer = ({ agent }: FooterProps) => (
  <footer className="m-h-56 leading-7 font-site ">
    <div className="flex flex-col sm:flex-row">
      <div className="basis-full lg:basis-1/3 bg-blue-site text-white p-7 sm:pl-24 pb-12">
        <div className="mt-5 -ml-8">
          <Image src={LogoImage} alt="Logo Remax" width={230} />
        </div>
        <div className="flex flex-col text-sm font-helvetica mt-4">
          <div className="font-semibold capitalize">{agent}</div>
          <div>Official Marketing Partner of Summarecon Bekasi</div>
        </div>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="border-b border-white pb-4 flex flex-col w-full">
            <p className="mt-5">
              Jl. Kelapa Nias Raya QE1/14 <br />
              Kelapa Gading, Jakarta 14240
            </p>
            <a href={`tel:+${phone[agent]}`} className="mt-5">Phone: +{phone[agent]}</a>
            <a href={`mailto:${email[agent]}`} className="mt-1">Email: {email[agent]}</a>
            {/* <p className="mt-10">Registered Charity: 12345-67</p> */}
            {/* <a href="https://solitaire.remax.co.id" className="text-xl lg:text-xl mt-5 font-semibold">solitaire.remax.co.id</a> */}
          </div>
        </div>
      </div>
      <div className="basis-2/3 bg-gray-200 p-14 text-justify hidden lg:block font-sans">
        <p>
          RE/MAX (NYSE: RMAX) hadir di Indonesia pada tahun 2014 dan memulai revolusi mental kepercayaan dalam transaksi
          property. RE/MAX hadir di 115 negara dan wilayah dengan kekuatan jaringan lebih dari 8,300 kantor dan 135,000.
          RE/MAX didirikan berdasarkan mimpi, di mana dalam setiap pertemuan, agennya akan memberikan layanan terbaik
          dan mencapai hasil maksimal. Melalui mimpi ini, industri properti telah berubah selamanya.
        </p>
        <p className="mt-2">
          RE/MAX percaya pada konsep maksimum. Ketika dikombinasikan dengan pelatihan kelas dunia dan keunggulan
          teknologi, itu akan menarik dan menjadi alat yang kuat untuk agen (MA) dan pemilik bisnis (BO) yang sangat
          efisien dan sangat termotivasi untuk berhasil. Pada awal pertumbuhannya, RE/MAX berkembang pesat di Amerika
          Serikat dan Kanada dengan pangsa pasar lebih dari 40%. Selain itu, jaringan RE/MAX telah melampaui batas dan
          benua, dan telah diterima dan sangat dipercaya di banyak negara. Sekarang RE/MAX telah tumbuh menjadi
          pembangkit tenaga listrik real estat global dengan kehadiran di lebih dari 115 negara dan wilayah, lebih dari
          8,300 kantor dan didukung oleh lebih dari 125.000 rekanan pemasaran tepercaya.
        </p>
      </div>
    </div>
    <Whatsapp agent={agent} />
  </footer>
)

export default Footer

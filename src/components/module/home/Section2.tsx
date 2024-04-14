import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactElement, useState } from 'react'

const IconCard = ({
  isActive = false,
  srcGreen,
  srcWhite,
  title,
  description = '',
  onClick,
  tabIdx,
  useMobile,
  shouldUseLink = false,
}: {
  srcGreen: string
  srcWhite: string
  title: string | ReactElement
  description?: string
  isActive?: boolean
  useMobile?: boolean
  onClick: () => void
  tabIdx: number
  shouldUseLink?: boolean
}) => {
  const renderContent = () => (
    <div
      className={clsx(
        'transform group px-3 py-10 rounded-full shadow hover:shadow-emerald-600/10 text-center hover:bg-emerald-600/5 transition duration-500',
        {
          ['translate-y-1/4 shadow-emerald-600/10 bg-emerald-600/5']: isActive && !useMobile,
          ['bg-white']: !isActive,
        }
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          'size-16  group-hover:bg-emerald-600  group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm  transition duration-500 mx-auto',
          {
            ['text-white bg-emerald-600']: isActive,
            ['bg-emerald-600/5 text-emerald-600']: !isActive,
          }
        )}
      >
        <i className="">
          <Image
            className={clsx('group-hover:hidden', {
              ['hidden']: isActive,
              ['block']: !isActive,
            })}
            alt=""
            src={srcGreen}
            width={30}
            height={30}
          />
          <Image
            alt=""
            className={clsx('group-hover:block', {
              ['hidden']: !isActive,
              ['block']: isActive,
            })}
            src={srcWhite}
            width={30}
            height={30}
          />
        </i>
      </div>
      <div className="content mt-6">
        <span className="title text-lg font-semibold hover:text-emerald-600">{title}</span>
      </div>
    </div>
  )
  return shouldUseLink ? (
    <Link href={`/services?tab=${tabIdx}`}>{renderContent()}</Link>
  ) : (
    <div className="cursor-pointer">{renderContent()}</div>
  )
}

const description = [
  'Menyediakan layanan kesehatan kerja seperti klinik kesehatan kerja, laboratorium OH-IH (Occupational Health and Industrial Hygiene), serta pusat terapi dan rehabilitasi kesehatan kerja.',
  'Memberikan layanan kesehatan kerja di tempat, termasuk klinik internal, personel OHS, peralatan dan persediaan OHS, pemeriksaan kesehatan rutin di tempat kerja (HRA-IH), pemeriksaan medis secara langsung di tempat kerja (MCU Onsite), dan lain-lain.',
  'Menyediakan berbagai macam obat, peralatan medis sekali pakai, peralatan, dan persediaan lainnya yang berkaitan dengan kesehatan dan keselamatan kerja.',
  'Menyediakan konsultasi dan bantuan terkait manajemen sistem, pusat pengendalian alarm, sertifikasi, evakuasi medis (Medevac), administrasi dan pengelolaan kesehatan tenaga kerja (ASO), dan lain-lain.',
  'Menyelenggarakan pelatihan di Training Center K3 (Kesehatan dan Keselamatan Kerja) dan keterampilan kerja sesuai dengan standar Kementerian Ketenagakerjaan RI< Badan Nasional Sertifikasi Profesi (BNSP), standar internal Aldino, serta standar industri khusus.',
]

export const Section2 = ({
  defaultTab = 0,
  shouldUseLink = false,
}: {
  shouldUseLink?: boolean
  defaultTab?: number
}) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(defaultTab)

  const renderDesktop = () => {
    return (
      <div className="container hidden lg:grid lg:grid-cols-5 mt-24 gap-[30px]">
        <IconCard
          tabIdx={0}
          isActive={activeTab === 0 && !shouldUseLink}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/clinic-green.png"
          srcWhite="/icons/clinic-white.png"
          title={
            <div>
              OHS Center <br />
              <span className="opacity-0 invisible text-transparent">a</span>
              {!shouldUseLink && activeTab === 0 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 0 ? 0 : -1))
            router.push(`/services?tab=0`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={1}
          isActive={activeTab === 1}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/location-green.png"
          srcWhite="/icons/location-white.png"
          title={
            <div>
              OHS Coorporate <br /> On Site
              {!shouldUseLink && activeTab === 1 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 1 ? 1 : -1))
            router.push(`/services?tab=1`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={2}
          isActive={activeTab === 2}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/drugs-green.png"
          srcWhite="/icons/drugs-white.png"
          title={
            <>
              OHS Drugs & Supplies
              <br />
              {!shouldUseLink && activeTab === 2 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 2 ? 2 : -1))
            router.push(`/services?tab=2`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={3}
          isActive={activeTab === 3}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/medical-green.png"
          srcWhite="/icons/medical-white.png"
          title={
            <>
              OHS Consultant & <br /> Assistant
              {!shouldUseLink && activeTab === 3 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 3 ? 3 : -1))
            router.push(`/services?tab=3`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={4}
          isActive={activeTab === 4}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/presentation-green.png"
          srcWhite="/icons/presentation-white.png"
          title={
            <div>
              OHS Training & <br /> Human Capital
              {!shouldUseLink && activeTab === 4 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 4 ? 4 : -1))
            router.push(`/services?tab=4`, {
              scroll: false,
            })
          }}
        />
      </div>
    )
  }
  const renderTablet = () => {
    return (
      <div className="container hidden md:grid lg:hidden grid-cols-2 mt-24 gap-[16px]">
        <IconCard
          tabIdx={0}
          isActive={activeTab === 0 && !shouldUseLink}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/clinic-green.png"
          srcWhite="/icons/clinic-white.png"
          title={
            <div>
              OHS Center <br />
              <span className="opacity-0 invisible text-transparent">a</span>
              {!shouldUseLink && activeTab === 0 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 0 ? 0 : -1))
            router.push(`/services?tab=0`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={1}
          isActive={activeTab === 1}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/location-green.png"
          srcWhite="/icons/location-white.png"
          title={
            <div>
              OHS Coorporate <br /> On Site
              {!shouldUseLink && activeTab === 1 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 1 ? 1 : -1))
            router.push(`/services?tab=1`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={2}
          isActive={activeTab === 2}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/drugs-green.png"
          srcWhite="/icons/drugs-white.png"
          title={
            <>
              OHS Drugs & Supplies
              <br />
              {!shouldUseLink && activeTab === 2 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 2 ? 2 : -1))
            router.push(`/services?tab=2`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={3}
          isActive={activeTab === 3}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/medical-green.png"
          srcWhite="/icons/medical-white.png"
          title={
            <>
              OHS Consultant & <br /> Assistant
              {!shouldUseLink && activeTab === 3 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 3 ? 3 : -1))
            router.push(`/services?tab=3`, {
              scroll: false,
            })
          }}
        />
        <IconCard
          tabIdx={4}
          isActive={activeTab === 4}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/presentation-green.png"
          srcWhite="/icons/presentation-white.png"
          useMobile
          title={
            <div>
              OHS Training & <br /> Human Capital
              {!shouldUseLink && activeTab === 4 && (
                <div className="container block lg:hidden">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab((prev) => (prev !== 4 ? 4 : -1))
            router.push(`/services?tab=4`, {
              scroll: false,
            })
          }}
        />
      </div>
    )
  }
  return (
    <section className="relative py-24 mx-auto w-full h-auto bg-white">
      <h1 className="text-primary-dark-yellow text-center text-lg lg:text-3xl font-bold mx-4">
        Pusat Layanan Kesehatan dan Keselamatan Kerja (K3) yang terintegrasi
      </h1>
      {renderDesktop()}
      {renderTablet()}

      <div className="container grid sm:hidden grid-cols-1 gap-[30px] mt-12">
        <IconCard
          tabIdx={0}
          isActive={activeTab === 0 && !shouldUseLink}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/clinic-green.png"
          srcWhite="/icons/clinic-white.png"
          title={
            <div>
              OHS Center <br />
              <span className="opacity-0 invisible text-transparent">a</span>
              {!shouldUseLink && activeTab === 0 && (
                <div className="container">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab(0)
            router.push(`/services?tab=0`, {
              scroll: false,
            })
          }}
        />
      </div>
      <div className="container grid sm:hidden grid-cols-1 gap-[30px] mt-12">
        <IconCard
          tabIdx={1}
          isActive={activeTab === 1}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/location-green.png"
          srcWhite="/icons/location-white.png"
          title={
            <div>
              OHS Coorporate <br /> On Site
              {!shouldUseLink && activeTab === 1 && (
                <div className="container">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab(1)
            router.push(`/services?tab=1`, {
              scroll: false,
            })
          }}
        />
      </div>
      <div className="container grid sm:hidden grid-cols-1 gap-[30px] mt-12">
        <IconCard
          tabIdx={2}
          isActive={activeTab === 2}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/drugs-green.png"
          srcWhite="/icons/drugs-white.png"
          useMobile
          title={
            <>
              OHS Drugs & Supplies
              <br />
              {!shouldUseLink && activeTab === 2 && (
                <div className="container">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab(2)
            router.push(`/services?tab=2`, {
              scroll: false,
            })
          }}
        />
      </div>
      <div className="container grid sm:hidden grid-cols-1 gap-[30px] mt-12">
        <IconCard
          tabIdx={3}
          isActive={activeTab === 3}
          shouldUseLink={shouldUseLink}
          srcGreen="/icons/medical-green.png"
          srcWhite="/icons/medical-white.png"
          useMobile
          title={
            <>
              OHS Consultant & <br /> Assistant
              {!shouldUseLink && activeTab === 3 && (
                <div className="container">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </>
          }
          onClick={() => {
            setActiveTab(3)
            router.push(`/services?tab=3`, {
              scroll: false,
            })
          }}
        />
      </div>
      <div className="container grid sm:hidden grid-cols-1 gap-[30px] mt-12">
        <IconCard
          tabIdx={4}
          isActive={activeTab === 4}
          shouldUseLink={shouldUseLink}
          useMobile
          srcGreen="/icons/presentation-green.png"
          srcWhite="/icons/presentation-white.png"
          title={
            <div>
              OHS Training & <br /> Human Capital
              {!shouldUseLink && activeTab === 4 && (
                <div className="container">
                  <p className="px-2 w-fit font-normal py-4 rounded-lg">{description[activeTab]}</p>
                </div>
              )}
            </div>
          }
          onClick={() => {
            setActiveTab(4)
            router.push(`/services?tab=4`, {
              scroll: false,
            })
          }}
        />
      </div>
      {!shouldUseLink && (
        <div className="container hidden md:block">
          <p className="px-6 w-fit mt-[70px] py-8 rounded-lg bg-emerald-600/5">{description[activeTab]}</p>
        </div>
      )}
    </section>
  )
}

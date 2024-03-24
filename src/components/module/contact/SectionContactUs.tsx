import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Link from 'next/link'

export const SectionContactUs = () => {
  return (
    <>
      <section className="aboutUs relative table w-full py-20 bg-[url('/images/banner-about-us.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-emerald-900/75"></div>
        <div className="relative container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li
              className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[6px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 48 H 1437.5 H 2880 V 0 H 2881 C 1437 49 1439 47 1 1 H 1 V 48 Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="bg-white">
        <div className="container pt-8 pb-12 ">
          <div className="bg-white max-w-[520px] mx-auto dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
            <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

            <form method="post" name="myForm" id="myForm" onSubmit={() => {}}>
              <p className="mb-0" id="error-msg"></p>
              <div id="simple-msg"></div>
              <div className="grid md:grid-cols-12 md:gap-6">
                <div className="md:col-span-6 mb-5">
                  <label htmlFor="name" className="font-semibold">
                    Your Name:
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Name :"
                  />
                </div>

                <div className="md:col-span-6 mb-5">
                  <label htmlFor="email" className="font-semibold">
                    Your Email:
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Email :"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="col-span-1 flex flex-col mb-5">
                  <label htmlFor="subject" className="font-semibold">
                    Your Question:
                  </label>
                  <input
                    name="subject"
                    id="subject"
                    className="form-input border border-slate-100 dark:border-slate-800 mt-2"
                    placeholder="Subject :"
                  />
                </div>
              </div>
              <div className="grid grid-col-1">
                <div className="col-span-1 flex flex-col mb-5">
                  <label htmlFor="comments" className="font-semibold">
                    Your Comment:
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    className="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea"
                    placeholder="Message :"
                  />
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mx-auto mt-6">
            <div className="font-bold text-center">Or</div>
            <a className="mx-auto mt-8 lg:mt-4 px-2 py-1 bg-gray-200 hover:bg-gray-300 transition-all rounded-lg cursor-pointer w-fit flex items-center font-semibold">
              <WhatsAppIcon className="mr-1 text-[#25D366]" /> Click here for more info
            </a>
          </div>
        </div>
        <div className="container pb-24 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-phone"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Phone</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and benefit
                </p>

                <div className="mt-5">
                  <a
                    href="tel:+62895332067767"
                    className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    +62 8953 3206 7767
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-envelope"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Email</h5>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and benefit
                </p>

                <div className="mt-5">
                  <a
                    href="mailto:customer.relations@aldinomedika.co.id"
                    className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    customer.relations@aldinomedika.co.id
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative text-transparent">
                <div className="size-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                  <i className="uil uil-map-marker"></i>
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">Location</h5>
                <p className="text-slate-400 mt-3">
                  Kawasan Industri Jababeka, <br /> Jl. Tegal Danas No.673, <br /> Jaya Mukti, Cikarang Pusat, Bekasi,{' '}
                  <br /> 17530 Jawa Barat
                </p>

                <div className="mt-5">
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 transition duration-500"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

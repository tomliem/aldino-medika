import { menuKey } from '@/constants/menus'
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

              <div className="grid md:grid-cols-2">
                <div className="mb-5">
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

                <div className="mb-5">
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
        </div>
      </section>
    </>
  )
}

'use client'

import Link from "next/link"

export const StartYourLogistic = () => {
  return (
    <div className="text-primary-dark flex items-center flex-col">
      <div className="font-semibold mb-2">Start Your Logistic With Us</div>
      <Link href="/" className="bg-primary-yellow rounded-full px-6 py-2 text-white">Quick Quote</Link>
    </div>
  )
}

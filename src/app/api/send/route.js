import * as React from 'react'
import { EmailTemplate1 } from '../../../components/base/EmailTemplates/EmailTemplate1'
import { Resend } from 'resend'
import { ServerResponse } from 'http'
import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend('re_YPEemPCN_LrvJ7beukn1yPvGNZxnrPchk')

export async function POST(req) {
  console.log('aaaa')
  try {
    const body = await req.json()
    console.log('cek', body)
    const { source, destination, goods, shippingMethod, customerName, email } = body
    const { data, error } = await resend.emails.send({
      from: 'Aldino FNT Website <onboarding@resend.dev>',
      to: ['info@aldinofnt.com'],
      subject: 'Quick Order',
      react: EmailTemplate1({ customerName: customerName }),
    })
    if (error) {
      return NextResponse.json({ error })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

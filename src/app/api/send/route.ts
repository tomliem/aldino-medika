import * as React from 'react'
import { EmailTemplate1 } from '../../../components/base/EmailTemplates/EmailTemplate1'
import { Resend } from 'resend'
import { ServerResponse } from 'http'
import { NextResponse } from 'next/server'

const resend = new Resend('re_YPEemPCN_LrvJ7beukn1yPvGNZxnrPchk')

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate1({ firstName: 'John' }),
    })
    if (error) {
      return NextResponse.json({ error })
    }

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

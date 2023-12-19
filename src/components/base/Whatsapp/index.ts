import dynamic from 'next/dynamic'
import { WhatsappProps } from './Whatsapp'

export const Whatsapp = dynamic(() => import('./Whatsapp').then((x) => x) as Promise<React.FC<WhatsappProps>>, { ssr: false })

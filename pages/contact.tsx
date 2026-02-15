// pages/contact.tsx
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin } from 'lucide-react';

const QRCode = dynamic(
  () => import('qrcode.react').then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);



export default function Contact() {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
N:Ayita;Godwin;;;
FN:Godwin Ayita
ORG:Freelance Data & AI Consultant
TITLE:ML Engineer & Data Scientist
TEL;TYPE=work,voice:+33619251267
EMAIL;TYPE=work:godwin.ayita@example.com
URL:https://www.godwinayita.com
ADR;TYPE=work:;;Goussainville;Ile_de_France Paris;;95190;France
END:VCARD
`.trim()

  return (
    <>
      <Head>
        <title>Contact – Godwin Ayita</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-transparent p-4">
        <div className="w-full max-w-md bg-neutral-800/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Godwin Ayita</h1>
            <p className="text-cyan-400 mb-6">ML Engineer & Data Scientist</p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                Paris, France
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                +33 6 19 25 12 67
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                legodwayita@gmail.com
              </li>
            </ul>
          </div>
          <div className="bg-neutral-900 p-6 flex flex-col items-center">
            <p className="text-white/60 mb-4">Scannez pour ajouter à vos contacts</p>
            <div className="bg-white p-2 rounded-lg">
              <QRCode
                value={vCard}
                size={180}
                bgColor="#ffffff"
                fgColor="#0ea5e9"
                level="M"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

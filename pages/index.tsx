// pages/index.tsx
import Head from 'next/head'
import { ArrowUpRight } from 'lucide-react'

// Imports des composants UI
import Card from '../components/Card'
import Typewriter from '../components/Typewriter'
import ProfileImage from '../components/ProfileImage'
import CVButtons from '../components/CVButtons'

// Import des données (Notre "Garde-manger")
import { 
  words, 
  expertiseData, 
  techData, 
  languagesData, 
  formationData, 
  experienceData, 
  certificationsData, 
  hobbiesData, 
  softSkillsData 
} from '../lib/data'

export default function Home() {
  // Note: Plus besoin de useState/useEffect ici pour le typing, 
  // le composant <Typewriter /> s'en charge.

  return (
    <>
      <Head>
        <title>Godwin Ayita | Portfolio</title>
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="bg-neutral-800/20 shadow-xl rounded-lg max-w-4xl mx-auto mt-6 overflow-hidden relative p-8 flex flex-col lg:flex-row items-center gap-8 border border-white/5">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white text-4xl font-semibold">Godwin Ayita</h1>
          
          <div className="mt-2 text-cyan-400 text-2xl h-8 font-mono flex justify-center lg:justify-start">
            <Typewriter words={words} />
          </div>

          <p className="mt-4 text-white/50 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hi! I&apos;m <strong>Win</strong>, spécialiste de la donnée avec une
            solide base en développement. J’excelle dans la traduction des
            besoins métiers en solutions data complètes : conception
            d’architectures, automatisation de flux et création de dashboards
            percutants.
          </p>
          
          <CVButtons />
        </div>

        <ProfileImage src="/profile.jpg" alt="Photo de profil de Godwin" />

        <span className="absolute bottom-4 left-8 text-white/5 text-2xl sm:text-3xl md:text-4xl font-semibold -z-10 select-none">
          Content Creator / Community Manager
        </span>
      </section>

      {/* --- EXPERTISE --- */}
      <Section title="Domaines d'expertise">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} progress={item.progress}>
              {item.content}
            </Card>
          ))}
        </div>
      </Section>

      {/* --- TECH STACK --- */}
      <Section title="Technologies usuelles">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {techData.map((item) => (
            // Astuce : On passe null en children car TechSkill n'a pas de description
            <Card key={item.title} icon={item.icon} title={item.title} progress={item.progress}>
              {null} 
            </Card>
          ))}
        </div>
      </Section>

      {/* --- LANGUES --- */}
      <Section title="Langues">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {languagesData.map((item) => (
            <Card key={item.name} icon={item.icon} title={item.name}>
              <p className="text-sm text-white/50">{item.level}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- FORMATION --- */}
      <Section title="Formation">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {formationData.map((item) => (
            <Card key={item.degree} title={item.degree}>
              <p className="text-sm text-white/50">
                {item.institution} — <span className="text-xs text-cyan-400">{item.period}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- EXPERIENCE --- */}
      <Section title="Mon parcours professionnel">
        <ol className="relative border-l-2 border-orange-500 ml-4 space-y-10">
          {experienceData.map((exp, idx) => (
            <li key={idx} className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 bg-orange-500 w-4 h-4 rounded-full border-2 border-neutral-900"></span>
              <time className="mb-1 text-sm font-mono text-orange-400 block">
                {exp.period}
              </time>
              <h3 className="text-lg font-semibold text-white">
                {exp.role} — <span className="text-cyan-400">{exp.company}</span>
              </h3>
              <p className="text-white/50 mt-2 text-sm max-w-2xl">{exp.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* --- CERTIFICATIONS --- */}
      <Section title="Certifications">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title}>
              <p className="text-sm text-white/50">
                {item.issuer} — {item.year}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- HOBBIES --- */}
      <Section title="Hobbies & Passions">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {hobbiesData.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title}>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.items.map(hobby => (
                   <span key={hobby} className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                     {hobby}
                   </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- SOFT SKILLS --- */}
      <Section title="Soft Skills">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {softSkillsData.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title}>
              <ul className="space-y-2 text-white/50 mt-2">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm">
                    <ArrowUpRight className="h-3 w-3 text-cyan-400 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

// Petit composant utilitaire pour éviter de répéter les <section>
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="px-4 py-12 max-w-5xl mx-auto">
    <h2 className="text-2xl font-semibold text-white mb-8 flex items-center">
      <span className="w-2 h-8 bg-cyan-500 mr-3 rounded-sm"></span>
      {title}
    </h2>
    {children}
  </section>
);
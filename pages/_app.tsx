import '../styles/globals.css'
import '../styles/tooltip.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/animations/scale-extreme.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/animations/shift-toward.css'
import Router from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { ThemeProvider } from 'next-themes'

const Header = dynamic(() => import('../components/Header'), { ssr: false })

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true)
      document.documentElement.style.pointerEvents = 'all'
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onStart = () => {
      setLoad(false)
      document.documentElement.style.pointerEvents = 'none'
    }
    const onComplete = () => {
      setTimeout(() => {
        setLoad(true)
        document.documentElement.style.pointerEvents = 'all'
      }, 1000)
    }
    Router.events.on('routeChangeStart', onStart)
    Router.events.on('routeChangeComplete', onComplete)
    Router.events.on('routeChangeError', onComplete)
    return () => {
      Router.events.off('routeChangeStart', onStart)
      Router.events.off('routeChangeComplete', onComplete)
      Router.events.off('routeChangeError', onComplete)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Head>
        <title>Godwin Ayita | Portfolio</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Transition
        as={Fragment}
        show={!load}
        enter="transform transition duration-[100ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transform duration-[250ms] transition ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-white dark:bg-black flex justify-center items-center pointer-events-none z-50">
          <div className="animate-pulse text-center">
            <p className="text-6xl font-semibold text-black dark:text-white">Godwin Ayita</p>
            <i className="fal fa-spinner-third fa-spin text-xl text-black dark:text-white mt-4" />
          </div>
        </div>
      </Transition>
      <main className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black min-h-screen text-white">
        <div className="max-w-screen-lg mx-auto px-4 py-6 md:px-6 lg:px-8">
          <Header />
          <Component {...pageProps} />
        </div>
        <footer className="bg-gray-100 dark:bg-neutral-800/5">
          <div className="max-w-screen-lg mx-auto px-4 py-6 md:px-6 lg:px-8 flex justify-between items-center">
            <p>❤️ Fait par Godwin Ayita</p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  )
}

export default MyApp

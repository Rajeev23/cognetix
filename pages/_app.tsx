// import type { AppProps } from 'next/app'
// import { Inter } from 'next/font/google'
// import '../styles/globals.css'
// import  Layout  from '../components/layout'

// const inter = Inter({ subsets: ['latin'] })

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <div className={inter.className}>
//       <header className="border-b">
//         <div className="container mx-auto py-4">
//             <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </div>
//       </header>
//       {/* <main className="container mx-auto px-4 py-8">
//         <Component {...pageProps} />
//       </main> */}
//     </div>
//   )
// } 

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} className="" />
      </Layout>
    </div>
  )
} 
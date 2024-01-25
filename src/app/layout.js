'use client'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { store } from './store'
import { Provider } from 'react-redux'
// export const metadata = {
//   title: 'Car Insurance',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="flex flex-col min-h-screen">
      
      {/* <Navbar /> */}
        <main className="flex-grow">
          <Provider store={store}>
            <Navbar/>
            {children}
            <Footer/>
            </Provider>
        </main>
          {/* <Footer /> */}
         
    </body>
      </html>
    
  )
}

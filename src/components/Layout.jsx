import { Outlet } from 'react-router-dom'
import AnnouncementBar from './AnnouncementBar.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'

export default function Layout() {
  return (
    <div className="app-shell">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

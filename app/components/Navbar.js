'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link href="/" className="navbar-brand">
          <div className="logo-wrapper">
            <Image 
              src="/tessera-logo.png" 
              alt="Tessera logo" 
              width={40} 
              height={40}
              priority
            />
          </div>
          <div className="brand-text">
            <strong>TESSERA</strong>
            <span>MARITIME LOGISTICS SYSTEM</span>
          </div>
        </Link>

        {/* Navigation Links - Center */}
        <div className="navbar-links">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
            Company
          </Link>
          <Link href="/dashboard" className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
        </div>

        {/* Action Buttons - Right */}
        <div className="navbar-actions">
          <Link href="/contact" className="btn-contact">
            <span>✉</span>
            <span>Hubungi Kami</span>
          </Link>
          <button className="btn-notification" aria-label="Notifications">
            🔔
          </button>
          <Link href="/admin" className="btn-admin">
            <span>👤</span>
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      alignItems: 'center',
      gap: '15px'
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link href="/builder" style={{ color: 'white', textDecoration: 'none' }}>Builder</Link>
      <Link href="/preview" style={{ color: 'white', textDecoration: 'none' }}>Preview</Link>
    </nav>
  );
}
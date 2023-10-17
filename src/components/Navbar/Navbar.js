'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full py-4 z-10 ${hasScrolled ? 'transition-all bg-black bg-opacity-70' : 'transition-all'}`}
      style={poppins.style}
    >
      <div className='hidden md:flex justify-around'>
        <div className='flex gap-x-4'>
          <Image src='/images/logo-bmkg.png' className='w-10 h-12' width={60} height={60} alt='logo' />
          <div className='my-auto text-sm font-bold text-white'>
            <p>Badan Meteorologi</p>
            <p>Klimatologi Geofisika</p>
          </div>
        </div>
        <div className='my-auto flex gap-x-12 text-base font-medium text-white'>
          <Link href='/' className='p-2 hover:underline hover:underline-offset-4'>
            Beranda
          </Link>
          <Link href='/meteorologi' className='p-2 hover:underline hover:underline-offset-4'>
            Meteorologi
          </Link>
          <Link href='/klimatologi' className='p-2 hover:underline hover:underline-offset-4'>
            Klimatologi
          </Link>
          <Link href='/geofisika' className='p-2 hover:underline hover:underline-offset-4'>
            Geofisika
          </Link>
          <Link href='/artikel' className='p-2 hover:underline hover:underline-offset-4'>
            Artikel
          </Link>
          <Link href='/profil' className='p-2 hover:underline hover:underline-offset-4'>
            Profil
          </Link>
        </div>
      </div>
    </nav>
  );
}

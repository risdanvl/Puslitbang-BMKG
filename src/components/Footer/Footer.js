import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="px-36 py-20 mt-10 bg-background text-white">
      <div className="grid grid-cols-4 gap-x-5">
        <div>
          <Image
            src="/images/logo-bmkg.png"
            width={85}
            height={85}
            className=""
            alt="logo"
          />
          <div className="mt-3.5 text-sm font-bold text-white">
            <p>Badan Meteorologi</p>
            <p>Klimatologi Geofisika</p>
          </div>
          {/* <div className='address mt-7'>
          <p className='font-semibold text-xs text-white'>Kantor Pusat</p>
          <p className='text-xs'>Jl. Angkasa I No.2 KemayoranJakarta Pusat, DKI Jakarta 10610PO Box 3540 Jkt.</p>
        </div>
        <div className='telphone mt-7'>
          <p className='font-semibold text-xs text-white'>Tel. & Fax</p>
          <p className='text-xs'>Call Center (021)</p>
          <p className='text-xs'>196Fax (021) 4246703</p>
        </div>
        <div className='telphone mt-7'>
          <p className='font-semibold text-xs text-white'>Email :</p>
          <p className='text-xs'>cc196@bmkg.go.id</p>
        </div> */}
        </div>
        <div>
          <h3 className="text-lg underline leading-4 font-medium">
            Meteorologi
          </h3>
          <div className="mt-8 flex flex-col gap-y-6 text-base">
            <Link href="#">InaNWP</Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg underline leading-4 font-medium">
            Klimatologi
          </h3>
          <div className="mt-8 flex flex-col gap-y-6 text-base">
            <Link href="#">InaRWC</Link>
            <Link href="#">InaSHO</Link>
            <Link href="#">InaAQM</Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg underline leading-4 font-medium">Geofisika</h3>
          <div className="mt-8 flex flex-col gap-y-6 text-base"></div>
        </div>
      </div>
      <hr className="mt-20 w-full border-white" />
      <div className="mt-11 text-base text-center">
        <p>© 2023 - Pusat Penelitian dan Pengembangan BMKG</p>
      </div>
    </footer>
  )
}

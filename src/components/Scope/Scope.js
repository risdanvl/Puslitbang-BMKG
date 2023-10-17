import Link from 'next/link'
import React from 'react'

export default function Scope() {
  return (
    <section className="mt-20">
      <div>
        <div className="flex gap-x-4">
          <hr className="w-20 border-2 border-black my-auto" />
          <p className="text-lg font-bold">Ruang Lingkup</p>
        </div>
        <div className="px-28 w-3/4">
          <h1 className="mt-8 text-3xl font-bold">
            Kami Menyajikan Informasi Terkait Meteorologi, Klimatologi, dan
            Geofisika
          </h1>
        </div>
      </div>
      <div className="mt-16 flex gap-x-20">
        <div className="card bg-image-meteo bg-cover w-[427px] h-[421px] rounded-3xl">
          <div className="content flex flex-col justify-center items-start text-white px-5 bg-black bg-opacity-50 w-full h-full rounded-3xl">
            <h3 className="text-2xl font-bold">Meteorologi</h3>
            <p className="text-base mt-5">
              Kami memberikan info secara tepat dan akurat terkait cuaca di tiap
              harinya dengan data yang akurat dan juga real time.
            </p>
            <Link
              href="#"
              className="mt-10 w-fit bg-white py-4 px-8 text-black rounded"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
        <div className="card bg-image-climate bg-cover w-[427px] h-[421px] rounded-3xl">
          <div className="content flex flex-col justify-center items-start text-white px-5 bg-black bg-opacity-50 w-full h-full rounded-3xl">
            <h3 className="text-2xl font-bold">Klimatologi</h3>
            <p className="text-base mt-5">
              Kami memberikan info secara tepat dan akurat terkait cuaca di tiap
              harinya dengan data yang akurat dan juga real time.
            </p>
            <Link
              href="#"
              className="mt-10 w-fit bg-white py-4 px-8 text-black rounded"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
        <div className="card bg-image-geo bg-cover w-[427px] h-[421px] rounded-3xl">
          <div className="content flex flex-col justify-center items-start text-white px-5 bg-black bg-opacity-50 w-full h-full rounded-3xl">
            <h3 className="text-2xl font-bold">Geofisika</h3>
            <p className="text-base mt-5">
              Kami memberikan info secara tepat dan akurat terkait cuaca di tiap
              harinya dengan data yang akurat dan juga real time.
            </p>
            <Link
              href="#"
              className="mt-10 w-fit bg-white py-4 px-8 text-black rounded"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Script from 'next/script'

export default function Inarcm() {
  return (
    <>
      <div className="h-full flex flex-col">
        <h1 className="text-white text-center font-bold text-2xl mb-2">
          Indonesia Regional Climate Model (InaRCM) using RegCM Model
        </h1>
        <div className="grow">
          <div id="map" className="h-full"></div>
        </div>
      </div>

      <Script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" />
      <Script src="//d3js.org/d3.v4.min.js" />
      <Script src="/js/leaflet.canvaslayer.field.js" />
      <Script src="/js/map.js" />
    </>
  )
}

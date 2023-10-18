import { Components } from '@/components'

export default function Home() {
  return (
    <>
      <Components.Weather />
      <Components.Scope />
      <Components.AirQuality />
      <Components.Article />
    </>
  )
}

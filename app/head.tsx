import Script from "next/script"
import SAnaltyics from "../lib/scripts/segmentAnalytics"
export default function Head() {
  return (
    <>
      <title>THE CRIB</title>
      <Script src={SAnaltyics}/>
 
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

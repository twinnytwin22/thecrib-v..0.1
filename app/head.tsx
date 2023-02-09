import Script from "next/script"

export default function Head() {
  return (
    <>
      <title>THE CRIB</title>
    
      <Script src="/scripts/segmentAnalytics.js"/>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

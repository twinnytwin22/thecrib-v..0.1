import Script from "next/script"

export default function Head() {
  return (
    <>
      <title>THE CRIB</title>
    
      <Script src="/scripts/segmentAnalytics.js"/>
      <Script  src="https://www.googletagmanager.com/gtag/js?id=G-MPKDV2LKSW"/>
      <Script src="/scripts/gtag.js"/>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

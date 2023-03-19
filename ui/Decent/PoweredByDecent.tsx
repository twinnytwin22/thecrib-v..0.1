import Link from "next/link"
export const PoweredByDecent = () => {
    return (
        <div className="flex w-full mx-auto p-2 justify-center mt-4" ><p className="text-sm text-white font-bold">Powered by:</p>
        <Link href='https://hq.decent.xyz/1/Editions/0xbbCB210C147030fe4DB924182c10fE5B6775a86c'>
        <img className="w-36" src= "/assets/DecentLogos/decent-gradient-full.svg"/></Link></div>
      
    )
}
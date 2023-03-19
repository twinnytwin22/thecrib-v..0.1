import Link from "next/link"
export const PoweredByDecent = ({contractAddress}: any) => {
    return (
        <div className="flex w-full mx-auto p-2 justify-center items-center mt-4" ><p className="text-sm text-white font-bold">Powered by:</p>
        <Link href={`https://hq.decent.xyz/1/Editions/${contractAddress}`}>
        <img className="w-36" src= "/assets/DecentLogos/decent-gradient-full.svg"/></Link></div>
      
    )
}
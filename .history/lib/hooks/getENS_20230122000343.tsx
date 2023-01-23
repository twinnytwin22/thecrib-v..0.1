import { useEnsName, useEnsAvatar } from 'wagmi'
import Image from 'next/image'
export function GetENSName(ownerAddress: any) {
 const xaddress = ownerAddress?.ownerAddress
 const { data: ensName, isError, isLoading } = useEnsName({
 address: xaddress
 })
 if (isLoading) return <div>Getting ENS…</div>
  if (isError) return <div>Error fetching name</div>
  return <p>{ensName ? ensName : xaddress}</p>
}
export function GetENSAvi(ownerAddress: any) {
    const xaddress = ownerAddress?.ownerAddress
    const { data, isError, isLoading } = useEnsAvatar({
    address: xaddress
    })
    if (isLoading) return <div>…</div>
     if (isError) return <div>Error fetching name</div>
     return <div>{data ? <img className="rounded-full" src={data} alt={"ENS Avi"} width={40} height={40}/> 
     : <FallbackAvi/> }</div>
   }


   
export const FallbackAvi = () => {
     return (
       <>
      <div className="rounded-full bg-black p-8">C</div>
      </>
     )
   }
   
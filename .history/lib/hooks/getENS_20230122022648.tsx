import { useEnsName, useEnsAvatar } from 'wagmi'

import Image from 'next/image'

interface Props {
  str: string;
}

export function GetENSName(ownerAddress: any) {
 const xaddress = ownerAddress?.ownerAddress
 const { data: ensName, isError, isLoading } = useEnsName({
 address: xaddress
 })
 if (isLoading) return <div>…</div>
  if (isError) return <div>Error fetching name</div>
  return <p>{ensName ? ensName : xaddress}</p>
}
export function GetENSAvi(ownerAddress: any) {
    const xaddress = ownerAddress?.ownerAddress
    const { data, isError, isLoading } = useEnsAvatar({
    address: xaddress
    })
    const { data: ensName } = useEnsName({
      address: xaddress
      })
    if (isLoading) return <div>…</div>
     if (isError) return <div>Error fetching name</div>
     return <div>{data ? <img className="rounded-full ml-1" src={data} alt={"ENS Avi"} width={40} height={40}/> 
     :
     <div className='bg-black rounded-full w-20 h-20'> 
     <FallbackAvi str={!ensName ? xaddress : ensName}/>
     </div>
      }</div>
   }

export const FallbackAvi = (str: any) => {
  const CM = "CM"
 const initials = Object.values(str).toString().slice(0, 2)
     return (
       <>
      <div className="rounded-full bg-black p-2.5 w-[45px]">
        <p className='uppercase'>
          {!initials ? CM : initials}
        </p>
        </div>
      </>
     )
   }


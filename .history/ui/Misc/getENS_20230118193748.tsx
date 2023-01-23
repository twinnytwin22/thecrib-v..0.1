import { useEnsName, useEnsAvatar } from 'wagmi'

export function GetENSName(ownerAddress: any) {
 const xaddress = ownerAddress?.ownerAddress
 console.log(xaddress,'address from ens')
 const { data: ensName, isError, isLoading } = useEnsName({
 address: xaddress
 })
 if (isLoading) return <div>Getting ENS…</div>
  if (isError) return <div>Error fetching name</div>
  return <p>{ensName ? ensName : xaddress}</p>
}
export function GetENSAvi(ownerAddress: any) {
    const xaddress = ownerAddress?.ownerAddress
    console.log(xaddress,'address from ens')
    const { data: ensName, isError, isLoading } = useEnsAvatar({
    address: xaddress
    })
    if (isLoading) return <div>…</div>
     if (isError) return <div>Error fetching name</div>
     return <p>{ensName ? ensName : xaddress}</p>
   }

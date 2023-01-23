import { useEnsName } from 'wagmi'

export function GetENS(ownerAddress: any) {
 const xaddress = ownerAddress?.ownerAddress
 console.log(xaddress,'address from ens')
 const { data: ensName, isError, isLoading } = useEnsName({
 address: xaddress
 })
 if (isLoading) return <div>Fetching name…</div>
  if (isError) return <div>Error fetching name</div>
  return <div>Name: {ensName}</div>
}

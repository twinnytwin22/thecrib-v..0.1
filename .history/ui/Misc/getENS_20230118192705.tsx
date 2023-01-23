import { useEnsName } from 'wagmi'

export function GetENS(ownerAddress: any) {
 const address = ownerAddress.ownerAddress
 console.log(address,'address from ens')
 const { data: ensName, isError, isLoading } = useEnsName({
 address: address
 })
 if (isLoading) return <div>Fetching name…</div>
  if (isError) return <div>Error fetching name</div>
  return <div>Name: {ensName}</div>
}

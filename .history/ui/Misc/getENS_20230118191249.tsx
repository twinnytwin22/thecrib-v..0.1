import { useEnsName } from 'wagmi'

export function getENS(ownerAddress: any) {
 const address = ownerAddress || "" 
 const ensName = useEnsName({
 address
 })
 return (
     <>
  <div>{ensName ? `${ensName} (${address})` : address}</div>
  </>
 )
}

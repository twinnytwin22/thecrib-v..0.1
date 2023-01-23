'use client'
import { useEnsName } from 'wagmi'

export function GetENS(ownerAddress: any) {
 const address = ownerAddress.ownerAddress
 console.log(address,'address from ens')
 const ensName = useEnsName({
 address: address
 })
 return (
     <>
  <div>{!ensName ? address : ensName }</div>
  </>
 )
}

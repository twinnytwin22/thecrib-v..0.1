import { useEnsName } from 'wagmi'

export async function getENS(ownerAddress: any) {
 const ensName = useEnsName({
 address: ownerAddress,
 })
 return ensName
}

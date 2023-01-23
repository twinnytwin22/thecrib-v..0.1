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
     <div style={{ minWidth: "45px", minHeight: "45px", textAlign: "center" }} className='bg-black rounded-full'> 
     <FallbackAvi str={!ensName ? xaddress : ensName}/>
     </div>
      }</div>
   }

export const FallbackAvi = (str: any) => {
  const CM = "CM"
  const color = generateColorHsl(str);
  const initials = Object.values(str).toString().slice(0, 2)
     return (
       <>
      <div className= "rounded-full p-2.5" style={{ backgroundColor: color }}>
        <p className='uppercase'>
          {!initials ? CM : initials}
        </p>
        </div>
      </>
     )
   }


   const getHashOfString = (str: any) => {
    let hash = 2;
    for (let i = 0; i < str.length; i++) {
      // tslint:disable-next-line: no-bitwise
      hash = str;
    }
    hash = Math.abs(hash);
    return hash;
  };
  
  const normalizeHash = (hash: any, min: any, max: any) => {
    return Math.floor((hash % (max - min)) + min);
  };
  
  const generateHSL = (name: any) => {
    const hash = getHashOfString(name);
    const h = normalizeHash(hash, 0, 360);
    const s = normalizeHash(hash, saturationRange, saturationRange);
    const l = normalizeHash(hash, lightnessRange, lightnessRange);
    return [h, s, l];
  };
  
  const HSLtoString = (hsl: any) => {
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  };
  
  const generateColorHsl = (id: any) => {
    return HSLtoString(generateHSL(id));
  };

  const saturationRange = 45-55
  const lightnessRange = 45-55
  const range = 5
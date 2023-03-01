import { useEnsName, useEnsAvatar } from "wagmi";
import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";

import Image from "next/image";

interface Props {
  str: string;
}

export function GetENSName(ownerAddress: any) {
  const xaddress = ownerAddress?.ownerAddress;
  const {
    data: ensName,
    isError,
    isLoading,
  } = useEnsName({
    address: xaddress,
    chainId: 1,
  });
  if (isLoading) return <div>…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <p>{ensName ? ensName : xaddress}</p>;
}
export function GetENSAvi(ownerAddress: any) {
  const xaddress = ownerAddress?.ownerAddress;
  const { data, isError, isLoading } = useEnsAvatar({
    address: xaddress,
    chainId: 1,
  });
  const { data: ensName } = useEnsName({
    address: xaddress,
    chainId: 1,
  });
  if (isLoading) return <div>…</div>;
  if (isError) return <div>Error fetching name</div>;
  return (
    <div>
      {data ? (
        <img
          className="rounded-full ml-1"
          src={data}
          alt={"ENS Avi"}
          width={40}
          height={40}
        />
      ) : (
        <div
          style={{ minWidth: "45px", minHeight: "45px", textAlign: "center" }}
          className="rounded-full"
        >
          <FallbackAvi str={!ensName ? xaddress : ensName} />
        </div>
      )}
    </div>
  );
}

export const FallbackAvi = (str: any) => {
  const CM = "CM";
  const color = "#f87171";
  const initials = Object.values(str).toString().slice(0, 2);
  const bgImage = `https://api.dicebear.com/5.x/identicon/svg?seed=${initials}`;

  return (
    <div className="rounded-full">
      <div
        className="bg-cover ounded-full p-2.5 bg-black"
        style={{
          backgroundImage: `url(${bgImage})`,
          borderRadius: "50%",
          backgroundPosition: "center",
        }}
      >
        <p className="uppercase text-white">{!initials ? CM : initials}</p>
      </div>
    </div>
  );
};

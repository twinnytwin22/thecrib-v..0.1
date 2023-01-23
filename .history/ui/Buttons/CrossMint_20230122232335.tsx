"use client"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    
    export default function CrossMint(address: any, price: any) {
        const addr = address.address
        const pri = price as string
        console.log(pri, 'pri', price, 'price', addr, "addr" ,address , "address")
        return (
            <CrossmintPayButton
                clientId="0e692bda-51e8-485e-8337-534e589a8de4"
                mintConfig={{"type":"erc-721","totalPrice": {pri}}}
           
            />
        );
    }
"use client"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    
    export default function CrossMint(price: any) {
     const initialPrice = price.price.toString()
     const pri = initialPrice as string
        console.log("price:", initialPrice)
        return (
            <CrossmintPayButton
                clientId="0e692bda-51e8-485e-8337-534e589a8de4"
                mintConfig={{"type":"erc-721","totalPrice": {pri}}}
           
            />
        );
    }
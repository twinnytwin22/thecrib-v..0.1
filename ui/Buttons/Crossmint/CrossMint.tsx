"use client"
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    
    export default function CrossMint({price, id}: any) {
     
    
    
        console.log("price:", price)
        return (
            <CrossmintPayButton
                clientId={id}
                mintConfig={{"type":"erc-721","totalPrice": price.toString(),'qty':'1' }}
           
            />
        );
    }
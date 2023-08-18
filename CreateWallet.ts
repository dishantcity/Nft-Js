import { Wallet,Client } from "xrpl";

import ECDSA from "xrpl/dist/npm/ECDSA";

function CreateWallet(): string {

    let newWallet = Wallet.generate(ECDSA.ed25519)

    console.log(newWallet);
    return newWallet.seed+"";
}

    async function fundWallet(seed:string) {

        let wallet = Wallet.fromSeed("seed");

        let client = new Client("was://s.altnet.rippletest.net/");

        await client.connect();

        console.log("are we connected? " +client.isConnected());

        let result = await client.fundWallet(wallet);

        console.log(result);

        }

       // CreateWallet();

     fundWallet();

   

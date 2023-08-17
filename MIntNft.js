const xrpl = require('xrpl');

const Wallet = xrpl.Wallet;

const Client = xrpl.Client;

const NFTokenMint = xrpl.NFTokenMint;

const convertStringToHex = xrpl.convertStringToHex;

async function mintNFT() {

    try {

        let wallet = Wallet.fromSeed("sEdTcpfZ5CVqm6sxc86ZVmhjsE4L3GM");

 

        let client = new Client("wss://s.altnet.rippletest.net/");

        wallet.sign

        await client.connect();

        let nftMint = {

            Account: wallet.classicAddress,

            NFTokenTaxon: 1,

            TransactionType: "NFTokenMint",

            URI: convertStringToHex("Dishant")

        };
 
        let signedTrx = wallet.sign(nftMint);

        console.log(signedTrx);

        let submittedTrx = await client.submit(nftMint, { autofill: true, wallet: wallet });

        console.log(submittedTrx);

    } catch (err) {

        console.log(err);

    }

}

mintNFT();
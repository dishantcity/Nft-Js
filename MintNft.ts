import{Wallet, Client, NFTokenMint, convertStringToHex} from 'xrpl';

 

 

async function mintNFT() {

try{

    let wallet = Wallet.fromSeed("sEdTcpfZ5CVqm6sxc86ZVmhjsE4L3GM")

 

    let client = new Client("wss://s.altnet.rippletest.net/");

 

    await client.connect();

 

    let nftMint:NFTokenMint = {

 

        Account: wallet.classicAddress,

        NFTokenTaxon: 1,

        TransactionType: "NFTokenMint",

        URI:convertStringToHex("Dishant")

 

    }

    let signedTrx = wallet.sign(nftMint);

    console.log(signedTrx);

 

    let submittedTrx = await client.submit(nftMint, {autofill:true, wallet:wallet});

    console.log(submittedTrx);

} catch(err) {

    console.log(err);

}

 

}  

mintNFT();
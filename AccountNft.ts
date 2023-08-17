import{Wallet, Client, NFTokenMint, convertStringToHex,AccountNFTsRequest} from 'xrpl';

async function mintNFT() {

try{

    let wallet = Wallet.fromSeed("sEdTcpfZ5CVqm6sxc86ZVmhjsE4L3GM")

    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();

    let AccountNFTsRequest:AccountNFTsRequest ={

        account: wallet.classicAddress,

        command:'account_nfts',

    }

    let accNftResponse = await client.request(AccountNFTsRequest);

    console.log(accNftResponse);

} catch(err) {

    console.log(err);

}

}  

mintNFT();


import{Wallet, Client, NFTokenMint, convertStringToHex,AccountNFTsRequest, parseNFTokenID} from 'xrpl';

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

    console.log(accNftResponse.result.account_nfts);
    // let parsedNfttokenId = parseNFTokenID(accNftResponse.result.account_nfts[0].NFTokenID)
    // console.log(parseNFTokenID);

    accNftResponse.result.account_nfts.forEach(nft =>{
        let parsedNfttokenId = parseNFTokenID(nft.NFTokenID)
        console.log(parseNFTokenID);
    })

} catch(err) {

    console.log(err);

}

}  

mintNFT();


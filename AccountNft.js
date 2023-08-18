const { Wallet, Client, NFTokenMint, convertStringToHex, AccountNFTsRequest, parseNFTokenID } = require('xrpl');

 

async function mintNFT() {

    try {

        const wallet = Wallet.fromSeed("sEdS7C5vCoid6FaunQ24GLVnWaXqL5d");

        const client = new Client("wss://s.altnet.rippletest.net/");

 

        await client.connect();

 

        const accountNFTsRequest = {

            account: wallet.classicAddress,

            command: 'account_nfts',

        };

 

        const accNftResponse = await client.request(accountNFTsRequest);

        console.log(accNftResponse);

 

        console.log(accNftResponse.result.account_nfts);

 

        accNftResponse.result.account_nfts.forEach(nft => {

            const parsedNftokenID = parseNFTokenID(nft.NFTokenID);

            console.log(parsedNftokenID);

        });

 

        const parsedNftokenID = parseNFTokenID(accNftResponse.result.account_nfts[0].NFTokenID);

        console.log(parsedNftokenID);

 

    } catch (err) {

        console.log(err);

    }

}

 

mintNFT();
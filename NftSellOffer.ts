import { Client, NFTokenCreateOffer, NFTokenCreateOfferFlags, Wallet } from "xrpl";

async function sellNFT(){
try {
    let wallet_issuer = Wallet.fromSeed("rsRLmmL6zndGBH9xLNZxn5gqoWDYt6V2T5");
    let wallet_user = Wallet.fromSeed("sEdTcpfZ5CVqm6sxc86ZVmhjsE4L3GM");

    let client = new Client("wss://s.altnet.rippletest.net/");

    await client.connect();

    let nftSellOffer:NFTokenCreateOffer = {
        TransactionType: "NFTokenCreateOffer",
        Account: wallet_issuer.classicAddress,
        NFTokenID: "000000001A8ABD440445DB9CC82BC0182305FF9A0FB88E35CE1462A500000009",
        Amount: "0",
        Flags: NFTokenCreateOfferFlags.tfSellNFToken,
        Destination: wallet_user.classicAddress
    }

    let trxResult = await client.submit(nftSellOffer, {autofill: true, wallet: wallet_issuer});
    console.log(trxResult);

} catch (err) {
    console.log(err);
}

}
sellNFT();
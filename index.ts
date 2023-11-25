import {TonClient, WalletContractV4} from "ton";
import {mnemonicToPrivateKey} from "ton-crypto";

// Create Client
const client = new TonClient({
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
});

async function main() {
    // Generate new key
    let mnemonics = 'rug basket universe potato pledge nuclear style office coin permit purse face arena sadness update price affair stock coral minimum glance furnace october intact';
    let keyPair = await mnemonicToPrivateKey(mnemonics.split(' '));

    // Create wallet contract
    let workchain = 0; // Usually you need a workchain 0
    let wallet = WalletContractV4.create({workchain, publicKey: keyPair.publicKey});
    let contract = client.open(wallet);

    // Get balance
    let balance: bigint = await contract.getBalance();

    console.log(balance);
}

main();

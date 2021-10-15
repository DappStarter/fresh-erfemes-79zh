require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stone rice office pumpkin grace office army genius'; 
let testAccounts = [
"0xd43829518256dd8b2005a6d63f710d9f8e4de661ebee6ecb519530863557f286",
"0x928c6bf682aa040a89896af682748bbba2a4e00e9ed94f6123e525d13c8f8861",
"0x8a1215250026a96b7204b7fc1240d2c77a601453c79f1307fe5e4006dbcd0398",
"0x33aa9f0ed953b0a721429694a836c888b6a19641aa69942bf9fd229d6adef0e2",
"0x33dc9191323333e987498c690e8406d131760dd41af86ceeaefe1499e8573571",
"0x19ab126cabbcdd47360b0121d65e4e27d9d518f306f6361dfdc38b9b88fde18f",
"0x0392f43226d0bff8c8e15776f85737d013f468c8ceac5c9b4d9a739257b2412e",
"0x67c8e3edc40ae975f10267e2b73b524f71925cc2070ca3f3a8dabeb64f74a5a0",
"0xbc1c1103465cf6dca4242aebb56a58605c6fc2212aef4d125ff7a0e4621d487d",
"0xd9f50dea434e6f5de861c965bc9526738ef0c1a61a325544593adaa187c97baa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy regret mean pumpkin gesture canoe army gauge'; 
let testAccounts = [
"0xfda4a9e525d8da730a43d7c4a180e26ca878cc464dcaf3ca42b161be771881c1",
"0xd107ffdb273d077797478240639762708781dd87cd09de84c0cf14fd57cb7e20",
"0xbaa3a251518b81aab85fbb3b52cd1307d42e639b6a363dba137ca56858321ef2",
"0xc3a2cba5ee8e4e1cddc2953fe8c4ab7625de3535a7c224ccd5c54f60bce7ae50",
"0x964168d078f69dd5c80372cacb37b2cb315d80bcc7477c27deb33fd3934fb5e8",
"0x26a857360879f1ffbda3bf97b8af62d0886db7bd99749cd21b76c21474824b82",
"0xa506a42ba86b03b3d477ba178ad78fa2c63107d05a6c006c0fa883307d6bc929",
"0xd3d0a9a1461c753baa24a04c52fb936749617e4a423720c490bf142cba978e43",
"0x2ffbc72252452d219bfc38f0edf9da748bcfbef8b976fbe0d7d62d6299beaa32",
"0x5f2c55a56733a66bc85c402b4bad22ec0ec7a5b08fdac96878f5bc6ab20b635c"
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


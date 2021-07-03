// Harmony main net
export const HARMONY_MAIN_NET_VERSION = "0x63564c40";
export const HARMONY_MAIN_NET_BLOCK_EXPLORER_TX_URL = "https://explorer.harmony.one/#/tx/";
export const HARMONY_MAIN_NET_RPC_URL = 'https://api.harmony.one';
export const HARMONY_MAINNET_DATA = [{
    chainId: '0x63564c40',
    chainName: 'Harmony Mainnet',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18
    },
    rpcUrls: ['https://api.harmony.one'],
    blockExplorerUrls: ['https://explorer.harmony.one/#/'],
}];

// Harmony test net
export const HARMONY_TEST_NET_VERSION = "0x6357d2e0";
export const HARMONY_TEST_NET_BLOCK_EXPLORER_TX_URL = "https://explorer.pops.one/#/tx/";
export const HARMONY_TEST_NET_RPC_URL = 'https://api.s0.b.hmny.io';
export const HARMONY_TESTNET_DATA = [{
    chainId: '0x6357d2e0',
    chainName: 'Harmony Testnet',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18
    },
    rpcUrls: ['https://api.s0.b.hmny.io'],
    blockExplorerUrls: ['https://explorer.pops.one/#/'],
}];
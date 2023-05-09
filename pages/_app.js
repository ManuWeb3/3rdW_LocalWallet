import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, walletConnect, walletConnectV1 } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
    activeChain={activeChain}
    supportedWallets={[
      metamaskWallet(),
      // coinbaseWallet(),
      // walletConnectV1(),
      localWallet(),
      ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

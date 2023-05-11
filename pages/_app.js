import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, walletConnect, walletConnectV1 } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

// 3 attributes to <ThirdwebProvider>
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
    activeChain={activeChain}
    supportedWallets={[
      metamaskWallet(),
      // coinbaseWallet(),
      // walletConnectV1(),
      localWallet(),
      ]}
      sdkOptions={
        {
          gasless: {
            openzeppelin: {
              relayerUrl: "https://api.defender.openzeppelin.com/autotasks/a46ad2dc-5946-4e82-aa8c-968eb1d0422a/runs/webhook/cb1e7f89-27a8-4686-b04c-8bee342871de/AjKNB54MDUATye9YCw7gNK"
            }
          }
        }
      }
      >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

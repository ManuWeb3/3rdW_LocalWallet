import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

// try adding if-else (React State) to render only 1  button

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet/>
        <Web3Button
          contractAddress="0x16433D082e8b7F8514FAcbB3c066bcD751769b67"
          action={(contractInstance) => contractInstance.erc721.claim(1)}
          >
          Claim
        </Web3Button>
      </main>
    </div>
  );
}

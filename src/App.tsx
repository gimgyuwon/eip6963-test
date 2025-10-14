import { useState } from "react";
import WalletSelector from "./components/WalletSelector";
import Transfer from "./components/Transfer";

function App() {
  const [provider, setProvider] = useState<any>(null);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1 style={{ fontSize: "24px" }}>
        <a
          href="https://eips.ethereum.org/EIPS/eip-6963"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          🔔 EIP-6963 Wallet Test
        </a>
      </h1>

      {!provider ? (
        <WalletSelector onSelect={setProvider} />
      ) : (
        <Transfer provider={provider} />
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import {
  getWalletProviders,
  type WalletProviderDetail,
} from "../utils/eip6963";

interface WalletSelectorProps {
  onSelect: (provider: any) => void;
}

export default function WalletSelector({ onSelect }: WalletSelectorProps) {
  const [wallets, setWallets] = useState<WalletProviderDetail[]>([]);

  useEffect(() => {
    getWalletProviders().then(setWallets);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontWeight: "bold" }}>🦊 Select Wallet</h2>
      {wallets.length === 0 && <p>No wallets detected.</p>}
      {wallets.map(({ info, provider }) => (
        <button
          key={info.uuid}
          onClick={() => onSelect(provider)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "10px",
            padding: "10px 16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <img src={info.icon} alt={info.name} width={24} height={24} />
          <span>{info.name}</span>
        </button>
      ))}
    </div>
  );
}

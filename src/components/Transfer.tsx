import { useState } from "react";
import { ethers } from "ethers";

interface TransferProps {
  provider: any;
}

export default function Transfer({ provider }: TransferProps) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleTransfer = async () => {
    try {
      const ethersProvider = new ethers.BrowserProvider(provider);
      const signer = await ethersProvider.getSigner();

      const tx = await signer.sendTransaction({
        to,
        value: ethers.parseEther(amount),
      });

      setStatus(`Transaction sent! Hash: ${tx.hash}`);
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontWeight: "bold" }}>💸 Test ETH Transfer</h2>
      <input
        type="text"
        placeholder="Recipient address"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          margin: "10px 0",
          padding: "8px",
        }}
      />
      <input
        type="text"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          margin: "10px 0",
          padding: "8px",
        }}
      />
      <button
        onClick={handleTransfer}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send Transaction
      </button>
      <p style={{ marginTop: "12px", fontSize: "14px" }}>{status}</p>
    </div>
  );
}

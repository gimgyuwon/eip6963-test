export interface WalletInfo {
  uuid: string;
  name: string;
  icon: string;
}

export interface WalletProviderDetail {
  info: WalletInfo;
  provider: any;
}

// EIP-6963 이벤트를 통해 브라우저에 등록된 지갑들을 가져오기
export const getWalletProviders = async (): Promise<WalletProviderDetail[]> => {
  const providers: WalletProviderDetail[] = [];

  // 지갑이 자신을 알려주는 이벤트
  window.addEventListener("eip6963:announceProvider", (event: any) => {
    providers.push(event.detail);
  });

  // 지갑 목록 요청
  window.dispatchEvent(new Event("eip6963:requestProvider"));

  // 비동기 보장
  await new Promise((resolve) => setTimeout(resolve, 300));

  return providers;
};

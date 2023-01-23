export async function getAbi(url: any) {
    const abi = await fetch(url)
    return abi.json()
  }
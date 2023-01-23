export async function getAbi(url) {
    const abi = await fetch(url)
    return abi.json()
  }
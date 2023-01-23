export async function getAbi(url: any) {
    const res = await fetch(url)
    return res.json()
  }
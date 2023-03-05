const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 0): Promise<Response> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response;
  } catch (error) {
    if (retries < MAX_RETRIES) {
      console.warn(`Request failed, retrying in ${RETRY_DELAY_MS}ms...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      return fetchWithRetry(url, options, retries + 1);
    } else {
      console.error(`Request failed after ${MAX_RETRIES} retries`);
      throw error;
    }
  }
}

export default fetchWithRetry;

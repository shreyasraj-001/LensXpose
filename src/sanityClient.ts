// Sanity CMS Client — Zero-Cost Headless Setup
// Falls back gracefully when VITE_SANITY_PROJECT_ID is not set

let sanityClient: { fetch: (query: string) => Promise<any> } | null = null;

async function initSanityClient() {
  try {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    if (!projectId || projectId === 'default-id') {
      return null;
    }
    const { createClient } = await import('@sanity/client');
    return createClient({
      projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
      apiVersion: '2026-06-21',
      useCdn: true,
    });
  } catch {
    console.warn('Sanity client not available. Using mock data.');
    return null;
  }
}

export async function getSanityClient() {
  if (!sanityClient) {
    sanityClient = await initSanityClient();
  }
  return sanityClient;
}

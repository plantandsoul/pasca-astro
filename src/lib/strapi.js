const { STRAPI_URL, STRAPI_TOKEN } = import.meta.env;

export async function fetchPosts() {
  const response = await fetch(`${STRAPI_URL}/api/articles`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${STRAPI_TOKEN}`,
    }
  });
  const { data } = await response.json();

  return data;
};

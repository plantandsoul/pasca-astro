const { STRAPI_URL, STRAPI_TOKEN } = import.meta.env;

// TODO: codegen these
type Endpoint =
 | 'about'
 | `blog-post/${string}`
 | 'blog-posts'
 | 'global'
;

// TODO: codegen the types
export const fetchStrapi = async <T = any>(
  endpoint: `${Endpoint}${`?${string}` | ''}`
): Promise<T | null> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      }
    });
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

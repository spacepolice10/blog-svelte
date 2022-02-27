<script context="module">
	const query = `
    query MyQuery {
        posts {
            nodes {
                title
                content
            }
        }
    }

	`;
	export async function load({ fetch }) {
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
		if (response.ok) {
      const responseObj = await response.json(); 
      const posts = responseObj.data.posts.nodes;
			return {
				props: {
					posts
				}
			};
		}
		return {
			status: response.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
    export let posts;
    console.log(posts)
</script>
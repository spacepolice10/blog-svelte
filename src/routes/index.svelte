<script context="module">
	const query = `
    query MyQuery {
        posts {
            nodes {
            excerpt
            title
            author {
                node {
                username
                avatar {
                    url
                }
                }
            }
            tags {
                nodes {
                name
                }
            }
            featuredImage {
                node {
                mediaItemUrl
                altText
                }
            }
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

<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 cursor-pointer">
    {#each posts as post} 
    <div class="flex flex-col">
        <img src={post.featuredImage.node.mediaItemUrl} alt={post.featuredImage.node.altText} />
        <div class="flex gap-2 w-5 h-5 my-2">
            <img class="rounded-full" src={post.author.node.avatar.url} alt="author's avatar" />
            <p>{post.author.node.username}</p>
        </div>
        <h1 class="font-bold text-2xl">{post.title}</h1>
        <p>{@html post.excerpt}</p>
        <div class="flex gap-2 opacity-50">
            {#each post.tags.nodes as tag}
            <p class="font-thin"># {tag.name}</p>
            {/each}
        </div>
    </div>
    {/each}
</div>
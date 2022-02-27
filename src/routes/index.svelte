<script context="module">
	const query = `
    query MyQuery {
        posts {
            nodes {
            title
            excerpt
            uri
            commentCount
            author {
                node {
                username
                avatar {
                    foundAvatar
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
			error: new Error(`Could not load`)
		};
	}
</script>

<script>
    import { fly } from 'svelte/transition'
    export let posts;
    console.log(posts)
</script>

<div transition:fly="{{ y: 100, duration: 400 }}" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 duration-150">
    {#each posts as post} 
    <a sveltekit:prefetch href={`/post${post.uri}`}>
        <div class={"flex flex-col hover:scale-105 duration-150"}>
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
                <div class="flex justify-between items-center gap-2 ml-4">
                    <svg class="w-4 h-4" fill="white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.97 122.88"><title>instagram-comment</title><path d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"/></svg>
                    <p>{post.commentCount}</p>
                </div>
            </div>
        </div>
    </a>
    {/each}
</div>
    
<script context="module">
	export const prerender = true;
	const query = `
    query MyQuery($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    content
    title
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    author {
      node {
        nickname
        username
        firstName
        lastName
      }
    }
    tags {
      nodes {
        name
      }
    }
    comments {
      nodes {
        content
        author {
          node {
            name
            ... on User {
              id
              email
              avatar {
                url
              }
            }
          }
        }
      }
    }
    commentCount
  }
}


	`;
	export async function load({ url, params, fetch }) {
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
      	query, 
      	variables: {
      		slug: params.slug
      	}
      }),
    });
	if (response.ok) {
      const responseObj = await response.json();
      const post = responseObj.data.post;
			return {
				props: {
					post
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
    import { fly } from 'svelte/transition'
	export let post
    console.log(post)
</script>

<div transition:fly="{{ y: -150, duration: 400 }}" class="flex justify-center items-center w-full min-h-screen">
    <div class="grid grid-cols-1 gap-10 w-10/12">
        <h1 class="font-bold text-4xl">{post.title}</h1>
        <div class="flex gap-10">
            <img class="w-96" src={`${post.featuredImage.node.mediaItemUrl}`} alt />
            <div class="grid grid-cols-1">
                <p>Author: {post.author.node.firstName} {post.author.node.lastName}</p>
                <p>Comments: {post.commentCount}</p>
                <div class="flex gap-2 opacity-80 dark:opacity-50">
                    {#each post.tags.nodes as tag}
                    <p class="font-thin"># {tag.name}</p>
                    {/each}
                </div>
            </div>
        </div>
            <p>
                {@html post.content}
            </p>
        {#each post.comments.nodes as comment}
        <div class="flex">
            <p class="flex opacity-80 font-thin dark:opacity-50">{@html comment.content}</p>
        </div>
        {/each}
    </div>
</div>



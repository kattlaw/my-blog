import { groq } from 'next-sanity';
import RSS from 'rss';
import Post from '../app/(user)/post/[slug]/page';
import { client } from '../lib/sanity.client';

export async function getRSSFeed() {

  const site_url = 'localhost:3000';
    const feedOptions = {
        title: 'Bereaving Out Loud',
        description: 'Latest Blog Posts',
        generator: 'RSS Feed',
        site_url: site_url,
        feed_url: `localhost:3000/rss.xml`,
        pubDate: new Date(),
        copyright: `All Rights reserved ${new Date().getFullYear()}, Katherine Law`,
    };
  const feed = new RSS(feedOptions);

  const query = groq`*[_type == 'post']
  {...,
  title, 
  description,
   _createdAt
  }

    | order(_createdAt desc)`;

  const posts: Post = await client.fetch(query);

  posts.forEach((post: any) => {
    feed.item({
      title: post.title,
      url: `${site_url}/post/${post.slug.current}`,
      description: post.description,
      date: post._createdAt,
    });
  });

  return feed;
}



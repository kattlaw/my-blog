import { groq } from 'next-sanity';
import RSS from 'rss';
import { client } from '../lib/sanity.client';
import fs from 'fs';

export async function getRSSFeed() {

  const site_url = 'localhost:3000';
    const feedOptions = {
        title: 'Bereaving Out Loud',
        description: 'Latest Blog Posts',
        generator: 'RSS Feed',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        pubDate: new Date(),
        copyright: `All Rights reserved ${new Date().getFullYear()}, Katherine Law`,
    };
  const feed = new RSS(feedOptions);

  const query = groq`*[_type == 'post']
    {
      slug,
    } 
    | order(_createdAt desc)`;

  const posts = await client.fetch(query);

  posts.forEach((post: any) => {
    feed.item({
      title: post.title,
      url: `${site_url}/post/${post.slug}`,
      description: post.description,
      date: new Date(post._createdAt),
    });
  });


 return feed;
}



{/*import { getRSSFeed } from "../../lib/rss.xml";
import { NextApiResponse } from "next"



export default async function generateRSSFeed(
    res: NextApiResponse
){
    const xml = await getRSSFeed();

    const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
    const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes

    res.setHeader('Cache-Control', `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`);
    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(xml);

}*/}

import { NextApiRequest, NextApiResponse } from 'next';
import { getRSSFeed } from '../../lib/getRSSFeed';

export default async function rssHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  
    const xml = await getRSSFeed();

    //cache in Vercel network
    const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
    const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes

    res.setHeader('Cache-Control', `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`);
    res.setHeader("Content-Type", 'application/xml; charset=utf-8');
    res.send(xml);
  } catch (error) {
    console.error(error);
    res.status(500).end("Internal Server Error");
  }
};


import { NextApiRequest, NextApiResponse } from 'next';
import { getRSSFeed } from '../../lib/getRSSFeed';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const xml = await getRSSFeed();
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/rss+xml");
  res.send(xml);
  
};


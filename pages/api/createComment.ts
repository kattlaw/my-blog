import { NextApiRequest, NextApiResponse } from "next"
import { client } from "../../lib/sanity.client"


export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse
    ){
    const { _id, name, email, comment, _createdAt, approved} = JSON.parse(req.body)
    try {
      await client.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: _id,
        },
        name,
        email,
        comment,
        _createdAt,
        approved
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({message: `Could not submit comment`, err})
    }
    console.log('Comment Submitted!');
    res.status(200).json({ message: 'Comment submitted' })
  }



  
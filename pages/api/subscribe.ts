import { NextApiRequest, NextApiResponse } from 'next';


export default async function subscribe(
    req:NextApiRequest,
    res:NextApiResponse
){
    const FORM_ID = process.env.CONVERTKIT_FORM_ID;
    const API_KEY= process.env.CONVERTKIT_API_KEY;
    //const API_URL= process.env.CONVERTKIT_API_URL;

    //const url = [API_URL, `forms`, FORM_ID, `subscribe`].join('/');
   
    
    const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
    });
    const { first_name, email } = JSON.parse(req.body);

    try {
        await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            api_key: API_KEY,
            first_name,
            email
          })
        });
        console.log('Subscribed!');
        res.status(200).json({ message: 'User successfully subscribed' });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Could not subscribe`, err });
      }
    }

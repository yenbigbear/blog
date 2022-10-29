import { pool } from 'config/db';

export default async function handler(req:any, res:any){
  switch(req.method){
    case 'GET':
      return await getBlog(req, res);
    case 'POST':
      return res.status(200).send('\'POST\' Method not found!');
    default:
      return res.status(400).send('Method not allowd!');
  }
};

const getBlog = async (req:any, res:any) => {
  try{
    const results = await pool.query('select * from blog');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({error});
  }
}
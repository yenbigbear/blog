import { pool } from 'config/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res:NextApiResponse) => {
  switch(req.method){
    case 'GET':
      return await getBlog(req, res);
    case 'POST':
      return res.status(200).send('\'POST\' Method not found!');
    default:
      return res.status(400).send('Method not allowd!');
  }
};

const getBlog = async (req: NextApiRequest, res: NextApiResponse) => {

  const var1: string = req.query.id?'where `id` = ' + req.query.id:'';

  const results: any = await pool.query(
    // eslint-disable-next-line max-len
    'select `id`,`name`, `title`, `content`, date_format(`create_at`, "%Y-%m-%d %T") as create_at  from blog ' + var1
  );
  return res.status(200).json(results[0]);

  /*const results: any = await pool.query(
    'select date_format(`日期`, "%Y-%m-%d") as "日期",`規格`, `原料`  from f1'
  );*/

};

export default handler;

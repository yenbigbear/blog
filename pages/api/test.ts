import { pool } from 'config/db';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await pool.query('SELECT NOW()');

  res.status(200).json({ message: 'Pong!', time: response.rows[0].now });
};

export default handler;

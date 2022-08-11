// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { OCEAN_DATA_KEY } from '$config';
import axios from 'axios';

type Data = {
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { OceanCode } = req.query;
  const data = await axios
    .get(
      `http://www.khoa.go.kr/api/oceangrid/beach/search.do?ServiceKey=${OCEAN_DATA_KEY}&BeachCode=${OceanCode}&ResultType=json`,
    )
    .then(res => {
      return res.data;
    });

  res.status(200).json(data);
}

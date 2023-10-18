import * as fetch from 'node-fetch';

import { IGetIpData, IpInfoModel } from './interfaces';

export const getIpInfo = async ({
  ip,
}: {
  ip: string;
}): Promise<IpInfoModel> => {
  if (!ip) {
    return;
  }

  return fetch(`http://ip-api.com/json/${ip}`).then(async (res) => {
    const data: IGetIpData = await res.json();

    return {
      country: data?.country,
      city: data?.city,
      timezone: data?.timezone,
    };
  });
};

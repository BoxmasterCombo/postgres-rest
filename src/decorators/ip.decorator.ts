import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { getIpInfo } from '@Utils/get-ip-info';

export const CurrentIpInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const forwarded = req.headers['x-forwarded-for'];
    const ip =
      forwarded && forwarded.indexOf(':') >= 0
        ? forwarded.split(':')[0]
        : forwarded;

    return getIpInfo({ ip });
  },
);

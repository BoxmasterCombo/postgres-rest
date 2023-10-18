import { Module } from '@nestjs/common';

import { SesService } from '@Modules/aws/ses/ses.service';

@Module({
  providers: [SesService],
  exports: [SesService],
})
export class SesModule {}

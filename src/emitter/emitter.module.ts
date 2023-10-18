import { DynamicModule } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

export const MyEmitterModule: DynamicModule = EventEmitterModule.forRoot();

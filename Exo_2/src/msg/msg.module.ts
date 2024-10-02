import { Module } from '@nestjs/common';
import { MsgController } from './msg.controller';
import {MessagesService} from "./msg.service";
import {MsgRepository} from "./msg.repository";

@Module({
  controllers: [MsgController],
  providers: [MessagesService, MsgRepository]
})
export class MsgModule {}

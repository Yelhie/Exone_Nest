import {Controller, Get, Post, Body, Param, NotFoundException} from '@nestjs/common';
import {CreateMessageDto} from "./msg.dto";
import {MessagesService} from "./msg.service";


@Controller('msg')
export class MsgController {

    constructor(public messagesService: MessagesService) {}

    @Get()
    getAllMsg(){
        return this.messagesService.findAll()
    }
    //
    // @Get('/:id')
    // async getMsgById(@Param() id: string) {
    //     const message = await this.messagesService.findOne(id)
    //     if (!message)
    //         throw new NotFoundException(`Message with id ${id} not found`)
    // }
    //
    // @Post()
    // createMessage(@Body() body: CreateMessageDto) {
    //     return this.messagesService.create(body.content)
    // }
}

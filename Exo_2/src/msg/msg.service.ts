import { MsgRepository} from "./msg.repository";
import {Injectable} from "@nestjs/common";

@Injectable()
export class MessagesService {

    constructor(public messageRepo : MsgRepository) {}
    }

    async findOne(id: string){
        return await this.messageRepo.findOne(id)
    }
    //
    // async findAll(){
    //     return await this.messageRepo.findAll()
    // }
    //
    // async create(content: string){
    //     return await this.messageRepo.Create(content)
    // }
// }

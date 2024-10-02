import {readFile, writeFile } from "fs/promises"
import {Injectable} from "@nestjs/common";

@Injectable()
export class MsgRepository {


    async findOne (id: string){
        const contentFile = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contentFile)
        return messages[id]
    }

    async findAll (){
        const contentFile = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contentFile)
        return messages
    }

    async Create(content: string){
        const contentFile = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contentFile)
        const id = Math.floor(Math.random() * 999)
        messages[id] = {
            id, content
        }
        await writeFile('messages.json', JSON.stringify(messages))
    }
}
import PostTemplate, { IPostTemplate } from "../models/postTemplate";

export class PostTemplateController {
    async create(data: IPostTemplate){
        console.log(data)
        return await PostTemplate.create(data)
    }
    
    async findAll(){
        return await PostTemplate.find()
    }

    async findRandom(){
        const count = await PostTemplate.countDocuments()
        const randomNumber = Math.floor(Math.random() * count)

        return await PostTemplate.findOne().skip(randomNumber)
    }
}
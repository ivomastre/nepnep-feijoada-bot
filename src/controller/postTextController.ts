import PostTexts from "../models/postTexts";

export class PostTextsController {
    async findRandom(){
        const count = await PostTexts.countDocuments()
        const randomNumber = Math.floor(Math.random() * count)

        return await PostTexts.findOne().skip(randomNumber)
    }
}
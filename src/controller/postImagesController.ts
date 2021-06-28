import PostImages from "../models/postImages";

export class PostImagesController {
    async findRandom(imageType: string){
        const count = await PostImages.countDocuments({ imageType })
        const randomNumber = Math.floor(Math.random() * count)

        return await PostImages.findOne({ imageType }).skip(randomNumber)
    }

    async create(a){
        return await PostImages.create(a)
    }
}
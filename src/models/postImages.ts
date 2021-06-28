import { Schema, model } from 'mongoose'

export interface IPostImages {
    url: string,
    imageType: string
}

const PostImagesSchema = new Schema({
    url: String,
    imageType: String
})

export default model<IPostImages>('post-images', PostImagesSchema)
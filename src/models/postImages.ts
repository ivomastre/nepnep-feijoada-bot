import { Schema, model, SchemaType } from 'mongoose'

export interface IPostImages {
    binData: Buffer,
    imageType: string
}
const PostImagesSchema = new Schema({
    binData: Buffer,
    imageType: String
})

export default model<IPostImages>('post-images', PostImagesSchema)
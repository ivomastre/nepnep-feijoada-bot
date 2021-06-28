import { Schema, model, SchemaTypes } from 'mongoose'

export interface IPostText {
    text: String
}

const PostTextSchema = new Schema({
    text: String
})

export default model<IPostText>('post-text', PostTextSchema)



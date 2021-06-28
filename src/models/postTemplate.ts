import { Schema, model, SchemaTypes } from 'mongoose'

export interface IPostTemplate {
    html: string,
    variables: [{
        templateType: string,
        content: string
    }]
}

// image
// text
// background
const PostTemplateSchema = new Schema({
    html: String,
    variables: [{
        _id: false,
        templateType: String,
        content: String
    }],
})

export default model<IPostTemplate>('post-template', PostTemplateSchema)



import graph from 'fbgraph'
import { PostImagesController, PostTemplateController, PostTextsController } from '../controller/'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'
export default class Bot {
    private graphApi = graph
    private postTemplateController = new PostTemplateController
    private postImagesController = new PostImagesController
    private postTextsController = new PostTextsController

    constructor(accessToken: string){
        this.graphApi.setAccessToken(accessToken);
    }
    
    async postToFacebook(){
        const template = await this.postTemplateController.findRandom()
        const content = {};
        for(const element of template.variables){

            if(element.templateType == 'text'){
                const postText = await this.postTextsController.findRandom()
                Object.assign(content, { [element.content]: postText.text })
            }
            else {
                const postImage = await this.postImagesController.findRandom(element.templateType)
                const imageData = fs.readFileSync(postImage.url)
                const base64Image = new Buffer.from(imageData).toString('base64')
                const dataURI = 'data:image/jpeg;base64,' + base64Image
                Object.assign(content, { [element.content]: dataURI })
            }
        }
        nodeHtmlToImage({
            output: './image.png',
            html: template.html,
            content
        })
    }
}

//https://github.com/frinyvonnick/node-html-to-image
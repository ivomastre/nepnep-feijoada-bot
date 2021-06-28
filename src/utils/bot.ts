import graph from 'fbgraph'
import { TemplateController } from '../controller/'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'
export default class Bot {
    private graphApi = graph
    private templateController = new TemplateController

    constructor(accessToken: string){
        this.graphApi.setAccessToken(accessToken);
    }
    
    async postToFacebook(){
        const { content, html } = await this.templateController.create()
        nodeHtmlToImage({
            output: './image.png',
            html,
            content
        })
    }
}

//https://github.com/frinyvonnick/node-html-to-image
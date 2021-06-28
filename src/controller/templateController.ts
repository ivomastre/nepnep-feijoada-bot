import { PostTemplateController, PostImagesController, PostTextsController } from ".";
import fs from 'fs'

export class TemplateController {
    private postTemplateController = new PostTemplateController
    private postImagesController = new PostImagesController
    private postTextsController = new PostTextsController
    async create() {
        const template = await this.postTemplateController.findRandom()
        const content = {};
        for(const element of template.variables){

            if(element.templateType == 'text'){
                const postText = await this.postTextsController.findRandom()
                Object.assign(content, { [element.content]: postText.text })
            }
            else {
                const postImage = await this.postImagesController.findRandom(element.templateType)
                const dataURI = 'data:image/jpeg;base64,' + postImage.binData
                Object.assign(content, { [element.content]: dataURI })
            }
        }

        return { html: template.html, content }
    }
}
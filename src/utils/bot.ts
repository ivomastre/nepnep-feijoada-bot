import graph from 'fbgraph'
import { TemplateController } from '../controller/'
import nodeHtmlToImage from 'node-html-to-image'
import { FACEBOOK_ID, IMGBB_KEY } from '../config/env'
import imageUploader from 'imgbb-uploader'
export default class Bot {
    private graphApi = graph
    private templateController = new TemplateController

    constructor(accessToken: string, version: string){
        this.graphApi.setAccessToken(accessToken);
        this.graphApi.setVersion(version);

    }
    
    async postToFacebook(){
        const { content, html } = await this.templateController.create()
        const image = await nodeHtmlToImage({
            html,
            content,
            encoding: 'base64'
        })
        const { image: { url: imageUrl } } = await imageUploader({
            apiKey: IMGBB_KEY,
            base64string: image
        })

        this.graphApi.post(`${FACEBOOK_ID}/photos`, { url: imageUrl  },  function(err, res) {
            console.log(res); 
        })
    }
}
//https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing/#obter-um-token-de-longa-dura--o-de-acesso---p-gina
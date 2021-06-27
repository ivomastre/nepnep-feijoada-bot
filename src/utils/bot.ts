import graph from 'fbgraph'
export default class Bot {
    private graphApi = graph
    constructor(accessToken: string){
        this.graphApi.setAccessToken(accessToken);
    }
    
    postToFacebook(){
        console.log('postado')
    }
}

//https://github.com/frinyvonnick/node-html-to-image
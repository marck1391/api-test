import {LambdaRouter, Get, Response} from 'aws-lambda-ts'

@LambdaRouter({
    headers: {
        'Content-Type': 'application/json'
    }
})
export class App {
    data: any = {}
    constructor() {
        this.data.test2 = 'Testing'
    }

    @Get('/task/:id')
    //id = param, Host = header, res = Response object
    async test(id: string, Host: string, res: Response) {
        delete res.headers['Access-Control-Allow-Origin']
        console.log('Test Function', id, Host)
        console.log('Instance data', this.data.test2)
        return {success: true}
    }

    @Get()
    task() {
        return 'Welcome!'
    }

    @Get('/other')
    other(res:Response){
        res.headers['X-Custom-Yeah'] = 'lml'
        return {success: true}
    }
}
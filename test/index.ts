import { handler } from '../src/index'
import {request} from './testdata'

let start = Date.now()
let response = handler(request)
response.then((r: any) => {
    console.log('Response', r)
    console.log('Time>', Date.now() - start)
})
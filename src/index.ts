import { Router } from 'aws-lambda-ts'
import { App } from './app'

let router:Router = Reflect.getMetadata('router', App)

export async function handler(event) {
    return router.call(event)
}
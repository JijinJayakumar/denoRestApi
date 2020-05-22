import { Router } from 'https://deno.land/x/oak/mod.ts'
import capitalize  from 'https://deno.land/x/lodash/capitalize.js'

const router = new Router()

router.get('/api/v1', (context) => {
    let App=capitalize("node".split("").sort().join(""))
    context.response.body = 
    { greetings:  `Hello from ${App}!` };
   ;
})

export default router
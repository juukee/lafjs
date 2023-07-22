import { FunctionContext } from '@lafjs/cloud'

export default async function (ctx: FunctionContext) {
  console.log(ctx.request)
  console.log('')
  return '111'
}

export function hello() {
  console.log('hello')
  return 'hello'
}

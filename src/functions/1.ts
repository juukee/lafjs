import { FunctionContext } from '@lafjs/cloud'
import { hello } from '@/2'
export default async function (ctx: FunctionContext) {
  console.log(ctx.request)
  console.log('.')
  return hello()
}
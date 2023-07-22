import cloud, { FunctionContext } from '@lafjs/cloud'

export default async function (ctx: FunctionContext) {
  console.log(ctx.request)
  const db = cloud.database()
  const r = await db.collection('__functions__').get()
  return r.data
}
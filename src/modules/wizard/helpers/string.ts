// tslint:disable

export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) => {
      return  (c ^ (crypto as any).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  })
}

export function suuid(length: number = 8) {
  const id = uuid()
  if(length > id.length) throw new Error("ShortID must be shorter than UUID()")
  return uuid().substr(0, length-1)
}

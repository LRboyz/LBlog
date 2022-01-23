export interface UniversalExtend {
  name: string
  value: string
}

export const UNDEFINED = void 0

export const getExtendsObject = (
  _extends: UniversalExtend[]
): { [key: string]: string } => {
  return _extends?.length
    ? _extends.reduce((v, c) => ({ ...v, [c.name]: c.value }), {})
    : {}
}

export const getExtendValue = (_extends: UniversalExtend[], key: string) => {
  return _extends.length ? getExtendsObject(_extends)[key] : UNDEFINED
}

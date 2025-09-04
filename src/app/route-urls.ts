export const boxCalc = 'box-calc'

export const gehrung = 'gehrung'

export type LinkPathElement = string

export const sidebarLink = (pathElements: LinkPathElement[]) => {
    return pathElements.join('/')
}

export const pageLink = (pathElements: LinkPathElement[]) => {
    return '/' + pathElements.join('/')
}

export const boxCalcGehrungElements: LinkPathElement[] = [
    boxCalc,
    gehrung
]
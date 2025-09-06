export const boxCalc = 'box-calc'

export const gehrung = 'gehrung'
export const gehrung_alt = "gehrung-alt"

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

export const boxCalcGehrungAltElements: LinkPathElement[] = [
    boxCalc,
    gehrung_alt
]
export const projects = 'projects'
export const boxCalc = 'box-calc'
export const box = 'box'

export const gehrung = 'gehrung'
export const gehrung_alt = "gehrung-alt"
export const boxNew = 'new'

export type LinkPathElement = string

export const sidebarLink = (pathElements: LinkPathElement[]) => {
    return pathElements.join('/')
}

export const pageLink = (pathElements: LinkPathElement[]) => {
    return '/' + pathElements.join('/')
}

export const projectsElements: LinkPathElement[] = [
    projects
]

export const boxCalcGehrungElements: LinkPathElement[] = [
    boxCalc,
    gehrung
]

export const boxNewElements: LinkPathElement[] = [
    box,
    boxNew
]

export const projects = 'projects'
export const boxCalc = 'box-calc'
export const box = 'box'

export const gehrung = 'gehrung'
export const boxNew = 'new'
export const drawer = 'drawer'
export const standardDrawer = 'standardDrawer'

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

export const standardDrawerElements = [
    boxCalc,
    drawer,
    standardDrawer
]

export const boxNewElements: LinkPathElement[] = [
    box,
    boxNew
]

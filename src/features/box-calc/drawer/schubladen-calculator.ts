export const calculateDrawer = (box: {
    height: number,
    width: number,
    depth: number,
}, drawerConfig: {
    count: number,
    distance: number,
}) => {
    const abstandObenUndUnten = 2 * drawerConfig.distance
    const zwischnraueme = (drawerConfig.count - 1) * drawerConfig.distance
    const heigthForDrawer = box.height - abstandObenUndUnten - zwischnraueme
    const drawerHeight = Math.floor(heigthForDrawer / drawerConfig.count)

    return {
        ...box,
        drawer: {
            height: drawerHeight,
            count: drawerConfig.count,
            distance: drawerConfig.distance
        }
    }
}
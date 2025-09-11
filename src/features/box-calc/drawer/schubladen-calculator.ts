export const calculateDrawer = (box: {
    height: number,
    width: number,
    depth: number,
}, drawerConfig: {
    count: number,
    distance: number,
}) => {
    const heigthForDrawer = box.height - 2 * drawerConfig.distance - (drawerConfig.count - 1) * drawerConfig.distance;
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
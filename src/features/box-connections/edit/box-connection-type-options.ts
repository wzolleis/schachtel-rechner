import {SideConnectionType} from "@/features/box-connections/schema/box-connectiontype-schema";

const nextId = (value: number, prefix: string | undefined = 'SC') => {
    return `${prefix}${value}`
}

export const sideFrontOptions: SideConnectionType[] = [
    {
        id: nextId(1),
        label: 'Stumpfe Verbindung',
        defaultConnectionType: true,
        connectionType: 'STUMPF'
    },
    {
        id: nextId(2),
        label: 'Gehrung',
        defaultConnectionType: false,
        connectionType: 'GEHRUNG'
    },
    {
        id: nextId(3),
        label: 'Falz',
        defaultConnectionType: false,
        connectionType: 'FALZ'
    },
    {
        id: nextId(4),
        label: 'Falz',
        defaultConnectionType: false,
        connectionType: 'FALZ'
    }
]

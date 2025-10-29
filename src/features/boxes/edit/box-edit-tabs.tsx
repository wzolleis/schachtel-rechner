import {BluetoothConnectedIcon, FrameIcon, KeyboardIcon, LucideIcon} from "lucide-react";
import {BoxCommonSettingsForm} from "@/features/boxes/edit/box-common-settings-form";
import {BoxSidesForm} from "@/features/boxes/edit/box-sides-form";
import {Box} from "@/features/boxes/schema/box-schema";
import {FunctionComponent} from "react";
import {BoxConnectionTypesForm} from "@/features/box-connection-types/edit/box-connection-types-form";

export interface BoxEditTabProps {
    box?: Box
}

export interface BoxEditTab {
    name: string;
    value: string;
    icon: LucideIcon
    content: FunctionComponent<BoxEditTabProps>
}

export const boxEditTabs = (): BoxEditTab[] => [
    {
        name: 'Allgemein',
        value: 'common',
        icon: KeyboardIcon,
        content: ({box}) => <BoxCommonSettingsForm box={box}/>
    },

    {
        name: 'Seiten',
        value: 'sides',
        icon: FrameIcon,
        content: ({box}) => <BoxSidesForm box={box}/>
    },
    {
        name: 'Verbindungen',
        value: 'connection-types',
        icon: BluetoothConnectedIcon,
        content: ({box}) => <BoxConnectionTypesForm box={box}/>
    },
    /*
    {
        name: 'Schubladen',
        value: 'drawer',
        icon: Rows4Icon,
        content:
            <div>
                <p>Schubladen</p>
            </div>
    }*/
]

import {BluetoothConnectedIcon, FrameIcon, KeyboardIcon, LucideIcon} from "lucide-react";
import {BoxCommonSettingsForm} from "@/features/boxes/edit/box-common-settings-form";
import {BoxSidesForm} from "@/features/boxes/edit/box-sides-form";
import {Box} from "@/features/boxes/box-schema";
import {FunctionComponent} from "react";
import {BoxConnectionTypes} from "@/features/boxes/edit/box-connection-types";

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
        value: 'connextion-types',
        icon: BluetoothConnectedIcon,
        content: () => <BoxConnectionTypes/>
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

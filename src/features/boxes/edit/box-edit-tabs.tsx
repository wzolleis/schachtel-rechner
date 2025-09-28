import {FrameIcon, KeyboardIcon} from "lucide-react";
import {BoxCommonSettingsForm} from "@/features/boxes/edit/box-common-settings-form";
import {BoxSidesForm} from "@/features/boxes/edit/box-sides-form";

export const boxEditTabs = () => [
    {
        name: 'Allgemein',
        value: 'common',
        icon: KeyboardIcon,
        content: <BoxCommonSettingsForm/>
    },

    {
        name: 'Seiten',
        value: 'sides',
        icon: FrameIcon,
        content: <BoxSidesForm/>
    },
    /*
    {
        name: 'Gehrung',
        value: 'miter',
        icon: DiameterIcon,
        content: (
            <div>
                <p>Gehrung</p>
            </div>
        )
    },
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

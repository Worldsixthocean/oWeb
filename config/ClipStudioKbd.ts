import { KbdKey } from "@heroui/kbd"

interface clipStudioKbd {
    function: string,
    kbdList:{
        kdbKey?: KbdKey | KbdKey[],
        keybind: string
    }[]
}

export const clipStudioKbds : clipStudioKbd[] = [
    {
        function:"Change brush size",
        kbdList:[
            { //windows
                keybind : "Ctrl + Alt + drag"
            },
            { //mac
                kdbKey : ["ctrl","alt"],
                keybind : "drag"
            }
        ],
    },
    {
        function:"Zoom",
        kbdList:[
            { //windows
                keybind : "Ctrl + ␣ + drag"
            },
            { //mac
                kdbKey : ["command", "space"],
                keybind : "drag"
            }
        ],
    },
]
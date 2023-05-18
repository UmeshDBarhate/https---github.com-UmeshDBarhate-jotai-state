import {atom} from "jotai"


export const countAtom = atom(0)

export const increment = atom(get=>get(countAtom),
       (get,set)=>set(countAtom,get(countAtom)+1)
       )
export const decrement = atom(null,
    (get,set,_)=>set(countAtom,get(countAtom)-1)
    )
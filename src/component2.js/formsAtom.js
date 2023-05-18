import { atom, useAtom } from 'jotai'

// for product description input
export const textfieldinput = atom('')
export const eyeonincrement = atom(get=> get(textfieldinput).length>=20)
 //for product description
export const textproductinput = atom('')
export const eyeonproductinput= atom(get=> get(textproductinput).length>=10)
//for dropdown rating
export const dropdownrating = atom(0)
export const seedropdownrating = atom(get=>get(dropdownrating)===0)
//data storing
export const storage = atom([])



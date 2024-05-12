import {ReactNode, Dispatch, SetStateAction } from "react"

export type ModalTypeProps = {
   children: ReactNode
   state: boolean
   setF: Dispatch<SetStateAction<boolean>>
}
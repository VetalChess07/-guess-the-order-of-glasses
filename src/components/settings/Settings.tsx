import { createPortal } from 'react-dom';
import { IoSettingsOutline } from "react-icons/io5";
import Modal from '../../ui/modal/Modal';
import { useState } from 'react';
import UseLocalStorage from '../../utils/hooks/useLocalStorage';

import style from "./style.module.scss"

const portal = document.getElementById('settings')

import { setDataLSFn } from '../../utils/setLSData';

const {buttonOpen} = style

const Settings = ({dataGame}) => {
 

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const[newDataLS, setNewDataLS] =useState(dataGame)
  const [dataLS, setDataLS] =UseLocalStorage("reting", dataGame)
  const ff = [
    {
      mode:"easy",
      countGame: null,
      minAttempts: null,
      maxAttempts: null,
    }
  ]



  const onClickSettings = () =>{
    setModalOpen(true)
    const newData =setDataLSFn(dataLS)
    
  }

  return (
    <>
     
      {
         createPortal(
          <>
          {dataLS}
           <button className={buttonOpen} onClick={onClickSettings} ><IoSettingsOutline/></button>
          <Modal state={modalOpen} setF={setModalOpen} >
            <div><IoSettingsOutline /></div>
          </Modal>
          </>
          ,
            portal
         )
      }
    </>
  )
}

export default Settings

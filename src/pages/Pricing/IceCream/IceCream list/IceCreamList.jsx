import { useContext } from 'react'
import s from './IceCreamList.module.css'
import { AppContext } from '../../../../context/Context'

const IceCreamList = () => {
  const { setPricing, IceCreamListData } = useContext(AppContext);


  
  return (
    <div className={s.iceCreamList}>
      {IceCreamListData.map((list) => (
        <p key={list.id} onClick={() => (
          setPricing(list.id)
        )} className={s.txt}>{list.text}</p>
      ))}
    </div>
  )
}

export default IceCreamList
import { FaTimes } from "react-icons/fa"
import React from 'react'
import DisplayCard from './shared/DisplayCard'

// Here is the guestItem component to display individual item with Card component through the provided props from GuestList
function GuestItem( { item, handleDelete }) {
  
  return (
    <>
    <DisplayCard >
     <div className="guest">
      <div className="guest-item">
      {item.firstName} {item.lastName}
      </div>
      <div>
        <button onClick={()=>handleDelete(item.id)} className="guest-delete">
          <FaTimes color="red"/>
        </button>
      </div>
     </div>
    </DisplayCard>
    </>
  )
}

export default GuestItem
import React from "react"
import GuestItem from "./GuestItem"

// Here is the guestList component where the lists of guests are provided
function GuestList( { guest, handleDelete }) {
if(!guest || guest.length === 0 ){
  return <h2>No Guest yet</h2>
}

const guestDetail = guest.map(item => 
<GuestItem
key={item.id}
item = {item} 
// passing (handleDelete) props received from App down to the GuestList components
handleDelete={handleDelete}
/> 
)

  return (
    <div>
      {guestDetail}
    </div>
  )
}

export default GuestList
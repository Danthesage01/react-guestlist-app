import {v4 as uuidv4} from "uuid"
import GuestList from "./components/GuestList";
import Header from "./components/Header";
import {useState} from "react"
import GuestListData from "./data/GuestListData";
import GuestStats from "./components/GuestStats";
import GuestForm from "./components/GuestForm";


// This is the Parent component where props is passed down
function App() {
const [guest, setGuest] = useState(GuestListData)


function addGuest(newGuest){
newGuest.id = uuidv4()
  setGuest([newGuest, ...guest])

}
function deleteGuest(id){
  if(window.confirm("Are sure?")){
   setGuest(guest=> guest.filter(item => item.id !== id))
  }
}
  return (
    <>
    <Header />
    <div className="container">
        <GuestForm 
        guest={guest}
        handleAdd={addGuest}
        />
        <GuestStats guest={guest}/>
        <GuestList 
        guest={guest}
        handleDelete={deleteGuest}
      />
    </div>
  
    </>
  )
}

export default App;

import PropTypes from 'prop-types'
function GuestStats( { guest }) {
  const TotalGuest = guest.length

  return (
    <div>
      {TotalGuest >= 1 && <h3>{TotalGuest} Confirmed {TotalGuest <= 1 ? "Guest" : "Guests"}</h3>}
    </div>
  )
}

GuestStats.propTypes = {
  guest: PropTypes.array.isRequired
}

export default GuestStats
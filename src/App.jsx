import { useState } from "react";
import useQuery from "./useQuery";
import GuestList from "./components/GuestList";

export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const handleGuestSelect = (guest) => {
    setSelectedGuest(guest);
  };



function GuestDetails() {
  if (!selectedGuest) {
    return (
      <section className="details">
        <p>Select a guest for more details:</p>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Occupation: {selectedGuest.job}</h2>
      <p>Bio: {selectedGuest.bio}</p>
      <p>Phone: {selectedGuest.phone}</p>
    </section>
  );
}
if (loading) return <p>loading...</p>;
if (error || !guests) return <p>{error}</p>;

return (
  <>
    <h1>Guest List</h1>
    <GuestList guests={guests} onGuestSelect={handleGuestSelect}/>
    <GuestDetails />
  </>
);
}

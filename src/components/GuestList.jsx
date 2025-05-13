import GuestItem from "./GuestItem";

export default function GuestList({ guests }) {
  return (
    <article className="guests">
      {guests.map((guest) => (
        <div key={guest.id}>
          <GuestItem
            guest={guest}
            onClick={() => onGuestSelect(guest)}
          />
        </div>
      ))}
    </article>
  );
}

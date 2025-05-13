export default function GuestItem({ guest }) {
  return (
    <article className="guest">
      <h2>{guest.name} </h2>
      <p>{guest.email}</p>
    </article>
  );
}

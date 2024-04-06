export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl">Contact</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

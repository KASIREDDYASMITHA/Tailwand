export default function Form() {
  return (
    <form className="space-y-4 max-w-md mx-auto">
      <input type="text" placeholder="Name" className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="email" placeholder="Email" className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="password" placeholder="Password" className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button type="submit" className="w-full rounded bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 px-4 py-2">
        Submit
      </button>
    </form>
  );
}

import Button from "./Button";

export default function Card() {
  return (
    <div className="bg-white rounded shadow-lg p-4 max-w-sm">
      <img src="https://via.placeholder.com/300" className="rounded mb-4" />
      <h3 className="text-lg font-bold mb-2">Card Title</h3>
      <p className="text-gray-600 mb-4">This is a description of the card.</p>
      <Button text="Learn More" />
    </div>
  );
}

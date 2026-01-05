export default function GridLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg p-4">Card 1</div>
      <div className="bg-white shadow-lg p-4">Card 2</div>
      <div className="bg-white shadow-lg p-4">Card 3</div>
      <div className="bg-white shadow-lg p-4">Card 4</div>
      <div className="bg-white shadow-lg p-4">Card 5</div>
      <div className="bg-white shadow-lg p-4">Card 6</div>
    </div>
  );
}

export default function Table() {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr>
          <th className="border px-4 py-2">Column 1</th>
          <th className="border px-4 py-2">Column 2</th>
          <th className="border px-4 py-2">Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100 hover:bg-gray-200">
          <td className="border px-4 py-2">Row 1</td>
          <td className="border px-4 py-2">Data</td>
          <td className="border px-4 py-2">Data</td>
        </tr>
        <tr className="hover:bg-gray-200">
          <td className="border px-4 py-2">Row 2</td>
          <td className="border px-4 py-2">Data</td>
          <td className="border px-4 py-2">Data</td>
        </tr>
      </tbody>
    </table>
  );
}

import Navbar from "./components/Navbar";
import ResponsiveText from "./components/ResponsiveText";
import ImageCard from "./components/ImageCard";
import GridLayout from "./components/GridLayout";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="text-center p-8">
        <ResponsiveText />
        <ImageCard />
      </section>
      <section className="p-8">
        <GridLayout />
      </section>
      <section className="p-8">
        <Table />
      </section>
      <section className="p-8">
        <Form />
      </section>
    </div>
  );
}

export default App;

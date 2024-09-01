import TextInputForm from "./components/TextInputForm/TextInputForm";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">Welcome to Hang-Man</h1>
      <TextInputForm onSubmit={(value) => console.log("value from the hidden form is", value)}/>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="w-screen h-screen bg-blue-300">
      Hello {process.env.REACT_APP_NAME_VARIABLE}
    </div>
  );
}

export default App;

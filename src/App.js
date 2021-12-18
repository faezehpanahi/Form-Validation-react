import React, { useState } from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import FormSuccess from "./Components/Form/FormSuccess";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);

  function submitForm() {
    setIsSubmited(true);
  }

  return (
    <div className="App">
      <Header />
      {!isSubmited ? <Form submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}

export default App;

import "./Styles.css";
import Field from "./Components/Field";
import Translate from "./Components/Translate";
import Languages from "./Components/Languages";
import React, { useState } from "react";

function App() {
  const [language, setLanguage] = useState("el");
  const [text, setText] = useState("");
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr></hr>
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;

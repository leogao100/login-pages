import React from "react";
import AuthInputs from "./components/AuthInputs";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
      <>
          <Header />
          <main>
              <AuthInputs />
          </main>
      </>
  );
};

export default App;

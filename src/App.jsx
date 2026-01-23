import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper/Wrapper";
import Loader from "./pages/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  });

  return <div>{isLoading ? <Loader /> : <Wrapper />}</div>;
};

export default App;

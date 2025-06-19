import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { Loading } from "./components";
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingAnimation = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(loadingAnimation);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App


import { Outlet } from "react-router-dom"
import GlobalStyle from "./shared/GlobalStyle"
import Header from "./components/Header"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App

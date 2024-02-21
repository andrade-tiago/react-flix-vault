import { Outlet } from "react-router-dom"
import GlobalStyle from "./shared/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}

export default App

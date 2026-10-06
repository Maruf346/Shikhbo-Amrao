import PointerFollower from "./components/PointerFollower"
import { NavigationProvider } from "./navigation"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <NavigationProvider>
      <PointerFollower />
      <HomePage />
    </NavigationProvider>
  )
}

import SnackbarProvider from "./contexts/SnackbarContext";
import ThemeProvider from "./theme/ThemeContext";
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <SnackbarProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import FullCart from "./pages/FullCart";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout"; // Importar el componente de checkout

// Importar los componentes del Admin Dashboard
import AdminDashboard from "./components/admin/AdminDashboard";
import GamesAdmin from "./components/admin/GamesAdmin";
import UsersAdmin from "./components/admin/UsersAdmin";
import SalesAdmin from "./components/admin/SalesAdmin";
import NewSaleForm from "./components/admin/NewSaleForm";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Cart /> {/* Sidebar del carrito */}
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<FullCart />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta */}

          {/* Rutas administrativas */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/games" element={<GamesAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/sales" element={<SalesAdmin />} />
          <Route path="/admin/new-sale" element={<NewSaleForm />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

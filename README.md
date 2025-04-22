# 🎮 Game Shop – Tienda de Videojuegos Online

Aplicación web desarrollada para la gestión y venta de videojuegos digitales. Los usuarios pueden explorar el catálogo, registrarse y realizar compras, mientras que los administradores pueden gestionar el stock, usuarios y ventas.

## 🚀 Características principales

- 🛒 Visualización de catálogo de videojuegos
- 📦 Gestión de stock y ventas
- 🧑‍💻 Registro y login de usuarios
- 🔐 Login de administradores con autenticación Firebase
- 💰 Sistema de carrito de compras con cálculo de total
- 🕹️ Distinción entre usuarios regulares y premium (descuentos y promociones especiales)

---

## 🧱 Tecnologías utilizadas

### 🔧 Backend
- **Java** + **Spring Boot**
- **MySQL**
- **Hibernate / JPA**
- **REST API**

### 🖥️ Frontend
- **React.js**
- **Context API** para gestión de estado global
- **Axios** para consumir APIs
- **Tailwind CSS** para el diseño

### 🔥 Servicios externos
- **Firebase Authentication** para login de administradores

---

## 📁 Estructura del proyecto

```plaintext
backend/
├── src/
│   ├── main/java/com/gameshop/...
│   └── resources/
│       └── application.properties
└── pom.xml

frontend/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── App.js
├── public/
├── tailwind.config.js
└── package.json

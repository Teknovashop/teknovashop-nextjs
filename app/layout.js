
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "TeknovaShop — Gadgets y Electrónica",
  description: "Ofertas y comparativas de electrónica, actualizado a diario."
};

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

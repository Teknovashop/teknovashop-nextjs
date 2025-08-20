import "./globals.css";

export const metadata = {
  title: "TeknovaShop — Gadgets y Electrónica",
  description: "Ofertas y comparativas de electrónica, actualizado a diario.",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial"}}>
        {children}
      </body>
    </html>
  );
}

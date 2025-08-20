
export async function GET(){
  const items = [
    { id: 1, name: "Auriculares Bluetooth", description: "Cancelación pasiva y buena batería.", price: 39.99, image: "/sample.svg", affiliateUrl: "#" },
    { id: 2, name: "Cargador USB‑C 65W", description: "GaN compacto con 2xUSB‑C.", price: 29.99, image: "/sample.svg", affiliateUrl: "#" },
    { id: 3, name: "Smartwatch con GPS", description: "Seguimiento deportivo + NFC.", price: 119.00, image: "/sample.svg", affiliateUrl: "#" },
    { id: 4, name: "Powerbank 20.000 mAh", description: "USB‑C 30W, viaje y emergencias.", price: 34.90, image: "/sample.svg", affiliateUrl: "#" },
    { id: 5, name: "Bombilla Wi‑Fi", description: "Control por app, rutinas.", price: 9.99, image: "/sample.svg", affiliateUrl: "#" }
  ];
  return new Response(JSON.stringify(items), { headers: { "Content-Type": "application/json" } });
}

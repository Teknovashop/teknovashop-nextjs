
import ProductGrid from "../components/ProductGrid";

async function getProducts(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`, { cache: "no-store" });
  return res.json();
}

export default async function HomePage(){
  const products = await getProducts();
  return (
    <main style={{maxWidth:960, margin:'24px auto', padding:'0 16px'}}>
      <section style={{textAlign:'center', padding:'24px 0'}}>
        <h1 style={{fontSize:36,fontWeight:800, color:'var(--brand)'}}>Bienvenido a TeknovaShop</h1>
        <p style={{marginTop:8, color:'#555'}}>Catálogo curado y ofertas con enlaces de afiliado.</p>
      </section>
      <section id="catalogo" style={{marginTop:16}}>
        <h2 style={{fontSize:24, fontWeight:700, marginBottom:12}}>Selecciones de hoy</h2>
        <ProductGrid products={products}/>
      </section>
      <section id="contacto" style={{marginTop:40, textAlign:'center', fontSize:14, color:'#666'}}>
        ¿Dudas? Escríbenos a <a href="mailto:contacto@teknovashop.com">contacto@teknovashop.com</a>
      </section>
    </main>
  );
}

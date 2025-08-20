
import Link from "next/link";
export default function Header(){
  return (
    <header style={{background:'#111',color:'#fff',padding:'12px 16px'}}>
      <div style={{maxWidth:960,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Link href="/" style={{color:'#fff',fontWeight:800,textDecoration:'none'}}>🛒 TeknovaShop</Link>
        <nav style={{display:'flex',gap:12}}>
          <Link href="/" style={{color:'#fff'}}>Inicio</Link>
          <Link href="/#catalogo" style={{color:'#fff'}}>Catálogo</Link>
          <Link href="/#contacto" style={{color:'#fff'}}>Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

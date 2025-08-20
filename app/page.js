export default function Page() {
  return (
    <main style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2.25rem",fontWeight:800,color:"#7c3aed"}}>Bienvenido a TeknovaShop</h1>
      <p style={{marginTop:"1rem",fontSize:"1.125rem",color:"#444"}}>
        Las mejores ofertas de electrónica, actualizadas cada día.
      </p>
      <a href="/api/refresh?token=secreto123" style={{marginTop:"1.25rem"}}>Probar refresco</a>
    </main>
  );
}

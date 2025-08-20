
export default function ProductCard({ product }){
  return (
    <article style={{background:'#fff',borderRadius:12,padding:16,boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
      <img src={product.image || "/sample.svg"} alt={product.name} style={{width:'100%',borderRadius:8}} />
      <h3 style={{marginTop:12, fontWeight:700}}>{product.name}</h3>
      <p style={{margin:'8px 0', color:'#555', fontSize:14}}>{product.description}</p>
      <p style={{fontWeight:700}}>{product.price} €</p>
      <div style={{marginTop:12, display:'flex', gap:8}}>
        <a href={product.affiliateUrl || "#"} rel="sponsored nofollow" style={{padding:'10px 14px',background:'#7c3aed',color:'#fff',borderRadius:10,textDecoration:'none'}}>Ver oferta</a>
        {product.altUrl && <a href={product.altUrl} rel="sponsored nofollow" style={{padding:'10px 14px',border:'1px solid #ddd',borderRadius:10,textDecoration:'none'}}>Alternativa</a>}
      </div>
    </article>
  );
}

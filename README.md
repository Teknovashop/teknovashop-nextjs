
# TeknovaShop (Next.js 14, JS)

Web dinámica mínima con Next.js (App Router) lista para Vercel.
- Sin TypeScript (evita errores de build).
- API interna `/api/products` usada por la home.
- CSS simple en `app/globals.css`; añade Tailwind más tarde si quieres.

## Despliegue
1) Sube estos archivos a tu repo de GitHub.
2) En Vercel: New Project → Importa el repo → Framework: Next.js → Deploy.
3) (Opcional) Añade `NEXT_PUBLIC_BASE_URL=https://TU_DOMINIO` si prefieres URLs absolutas; por defecto funciona en relativo.

## Personalización
- Edita `app/api/products/route.js` con tus productos y enlaces de afiliado.
- Cambia estilos en `app/globals.css`.

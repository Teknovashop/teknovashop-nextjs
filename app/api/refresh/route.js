export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  if (token !== process.env.REFRESH_TOKEN) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  // Aquí revalidarías caché/tags si usas ISR. Por ahora solo respondemos OK.
  return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), { status: 200 });
}

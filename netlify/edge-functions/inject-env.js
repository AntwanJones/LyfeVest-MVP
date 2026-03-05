export default async (request, context) => {
  const response = await context.next();
  const html = await response.text();

  const injected = html
    .replace(
      "const SUPA_URL = window.ENV_SUPABASE_URL || '';",
      `const SUPA_URL = '${Deno.env.get("REACT_APP_SUPABASE_URL") || ""}';`
    )
    .replace(
      "const SUPA_KEY = window.ENV_SUPABASE_ANON_KEY || '';",
      `const SUPA_KEY = '${Deno.env.get("REACT_APP_SUPABASE_ANON_KEY") || ""}';`
    );

  return new Response(injected, response);
};
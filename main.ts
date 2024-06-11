import { graph } from "./ethan.ts";
import { HTML_JSON_VIEW } from "./json_view.ts";

Deno.serve((request) => {
  if (!new URLPattern({ pathname: "/" }).test(request.url)) {
    return new Response("Not found", { status: 404 });
  }

  if (request.headers.get("Accept")?.includes("text/html")) {
    return new Response(HTML_JSON_VIEW, {
      headers: { "Content-Type": "text/html" },
    });
  }

  return new Response(JSON.stringify(graph), {
    headers: { "Content-Type": "application/ld+json" },
  });
});

import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/button";

export const loader: LoaderFunction = ({ request, params }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  console.log(searchParams);

  if(searchParams.get("type") === "inquilino") {
    return json({ type: "inquilino" });
  }

  return json({ message: "otro" });
};

export default function Index() {
  const loaderData = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-4xl font-bold">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Button type="button">Hola</Button>
      {loaderData.type === "inquilino" ? <p>Es un inquilino</p> : <p>Es otro</p>}
    </div>
  );
}

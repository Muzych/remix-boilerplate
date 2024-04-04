import type { MetaFunction } from "@vercel/remix";
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Click me</Button>
    </div>
  );
}

"use client";
import { api } from "../utils/api";

export default function HomePage() {
  const doSomething = api.example.doSomething.useMutation();
  return (
    <>
      <h1>this is the home page</h1>
      <button onClick={() => doSomething.mutate({ text: "hello" })}>
        hello
      </button>
    </>
  );
}

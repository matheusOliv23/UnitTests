import { Button } from "@mui/material";
import SignInSide from "../components/SignInSide";
import Head from "next/head";
import { Counter } from "../components/Counter";
import Todo from "components/Todo";
import { tasks } from "../components/Todo/tasks";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Template</title>
        <meta name="description" content="Digite aqui uma breve descrição" />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/Matheus%20Oliveira.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg"
        />
      </Head>
      {tasks.map((task) => (
        <div key={task.id}>
          <Todo todo={task} />
        </div>
      ))}

      {/* <Counter description="Contador" defaultCount={0} /> */}
      {/* <SignInSide /> */}
    </div>
  );
}

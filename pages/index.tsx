import { Button } from "@mui/material";
import Head from "next/head";

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
      <Button variant="contained"> Olá Mundo</Button>
    </div>
  );
}

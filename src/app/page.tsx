import Image from "next/image";

const aaa = () => 
  {return "github actions test";
}
;

export default function Home() {
  const  bba  :number   =3;
  return (
    <main>
      <h1>{aaa()}</h1>
      {bba}
    </main>
  );
}

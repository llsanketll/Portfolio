import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16 flex">
      <div className="">
        <h1 className="mb-5 text-5xl font-bold leading-10">
          Full Stack{" "}
          <span className="bg-gradient-to-r from-[#EB0776]  to-[#F04598] bg-clip-text  text-transparent">
            Developer!
          </span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          consequatur veniam odio praesentium maiores culpa dolorum quaerat
          cupiditate distinctio voluptatibus? Debitis error alias recusandae
          tenetur dicta quaerat explicabo aut nobis!
        </p>
        <Button variant="primary" className="mt-5 mr-5">Contact Me</Button>
        <Button variant="secondary">Resume</Button>
      </div>
      <div>
        <img src="/rocket.png" alt="Image of rocket landing page" />
      </div>
    </main>
  );
}

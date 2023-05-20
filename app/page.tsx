import Button from "@/components/Button";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

export default function Home() {
  return (
    <main className="mt-16 flex">
      <div className="flex h-[60vh] flex-col ">
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
        <div>
          <Button variant="primary" className="mr-5 mt-5">
            Contact Me
          </Button>
          <Button variant="secondary">Resume</Button>
        </div>
        <div className="mt-auto flex cursor-pointer gap-5 text-2xl">
          <a href="https://www.instagram.com/blendjam" target="_blank">
            <BsInstagram />
          </a>

          <a href="https://github.com/llsanketll" target="_blank">
            <BsGithub />
          </a>
          <a href="https://www.upwork.com/freelancers/~018ea6a618289cc9d0" target="_blank">
            <SiUpwork />
          </a>
        </div>
      </div>
      <div>
        <Image src="/placeholder.png" width={1080} height={1080} alt="Image of rocket landing page" />
      </div>
    </main>
  );
}

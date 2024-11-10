import Image from "next/image";
import { Greet } from "./components/greet"
import { Counter } from "./components/counter";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-950 transition-colors">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-900 dark:text-white transition-colors">
        <Image
          className="dark:invert transition-colors"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Greet />
        <Counter />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent flex items-center justify-center bg-gray-900 text-white dark:bg-white dark:text-gray-900 gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transition-colors"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert transition-colors"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-900 dark:text-white transition-colors">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-gray-900 dark:text-white"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert transition-colors"
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
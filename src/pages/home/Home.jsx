import React, { useEffect, useState } from "react";
import StarRating from "../../components/starRating/StarRating";

export default function Home() {
  // const [theme, setTheme] = useState(() => {
  //     return localStorage.getItem('theme') || 'light';
  // });

  // useEffect(() => {
  //     localStorage.setItem('theme', theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    <main className="flex justify-center items-center min-h-[calc(100dvh-64px)] w-full max-w-screen-2xl mx-auto md:p-8 p-4">
      <div>
        <h1 className="text-3xl font-medium text-white">Films</h1>
        <div className="pt-3 pb-6">
          <input
            className="flex h-9 sm:w-96 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 ring-white disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Titre"
          />

          <StarRating />

          <textarea
            className="flex min-h-[60px] max-h-96 sm:w-96 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="Commentaire"
          ></textarea>
        </div>

        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-1 outline-offset-4 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-zinc-950 shadow hover:bg-gray-50/90 h-9 py-2 pl-3.5 pr-4">
          Ajouter
        </button>
      </div>
    </main>
  );
}

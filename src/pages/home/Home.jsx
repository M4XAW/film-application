import React from "react";

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
            <h1 className="text-3xl font-medium text-white">Home</h1>
        </main>
    );
}

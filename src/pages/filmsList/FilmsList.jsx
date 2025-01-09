import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Ellipsis } from 'lucide-react';

export default function FilmsList() {
    const [films, setFilms] = useState(() => {
        const storedFilms = localStorage.getItem("films");
        return storedFilms ? JSON.parse(storedFilms) : [];
    });

    const [search, setSearch] = useState("");
    const [sortConfig, setSortConfig] = useState({
        key: 'title',
        direction: 'asc',
    });

    const navigate = useNavigate();

    const sortFilms = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });

        const sortedFilms = [...films].sort((a, b) => {
            if (key === 'rating') {
                return direction === 'asc' ? a.rating - b.rating : b.rating - a.rating;
            } else if (key === 'title') {
                return direction === 'asc'
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title);
            }
            return 0;
        });

        setFilms(sortedFilms);
    };

    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);

    const filteredFilms = films.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase()) ||
        film.comment.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="min-h-[calc(100dvh-64px)] w-full max-w-screen-2xl mx-auto md:p-8 p-4">
            <h1 className='text-white text-3xl font-medium mb-6'>Mes films</h1>
            {films.length ? (
                <>
                    <div className="flex justify-between items-center gap-4 mb-3">
                        <input
                            className="flex h-9 max-w-72 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 ring-white disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Rechercher"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="relative w-full overflow-auto rounded-md border border-white/15">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                                    <th 
                                        className="h-10 w-64 px-4 text-left text-white/60 align-middle font-medium cursor-pointer"
                                        onClick={() => sortFilms('title')}
                                    >
                                        Titre
                                        {sortConfig.key === 'title' && (
                                            <span className="ml-2">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </th>
                                    <th className="h-10 px-4 text-left text-white/60 align-middle font-medium">Commentaire</th>
                                    <th 
                                        className="h-10 px-4 text-left text-white/60 align-middle font-medium cursor-pointer"
                                        onClick={() => sortFilms('rating')}
                                    >
                                        Note
                                        {sortConfig.key === 'rating' && (
                                            <span className="ml-2">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                                        )}
                                    </th>
                                    <th className="h-10 px-4 text-left text-white/60 align-middle font-medium">Poster</th>
                                    <th className="h-10 px-4 w-14 align-middle text-white/60 font-medium text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredFilms.map((film) => (
                                    <tr
                                        key={film.id}
                                        onClick={() => navigate(`/film/${film.id}`)}
                                        className="cursor-pointer transition-colors border-b border-white/15 last:border-b-0 hover:bg-white/5"
                                    >
                                        <td className="h-10 px-4 text-white font-medium whitespace-nowrap">{film.title}</td>
                                        <td className="h-10 px-4 text-white whitespace-nowrap">{film.comment ? `‟${film.comment}‟` : "Aucun"}</td>
                                        <td className="h-10 px-4 text-white">
                                            {Array.from({ length: 5 }).map((_, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="text-2xl"
                                                        style={{ color: index < film.rating ? "#FFD700" : "#CCC" }}
                                                    >
                                                        ★
                                                    </span>
                                                );
                                            })}
                                        </td>
                                        <td className="h-10 px-4">
                                            {film.poster ? (
                                                <a href={film.poster} target="_blank" rel="noreferrer" className="text-white hover:underline">Voir</a>
                                            ) : (
                                                "Aucune"
                                            )}
                                        </td>
                                        <td className="h-10 px-4 text-white cursor-pointer">
                                            <Ellipsis size={32} className='text-white p-2 hover:bg-white/5 rounded-md' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <p className="text-white/60">Vous n'avez pas encore ajouté de films.</p>
            )}
        </main>
    );
}

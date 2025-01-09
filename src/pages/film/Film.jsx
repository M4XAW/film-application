import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Dropdown from "../../components/dropdown/Dropdown";

export default function Film() {
    const { id } = useParams();
    const [film, setFilm] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const storedFilms = localStorage.getItem("films");
        if (storedFilms) {
            const films = JSON.parse(storedFilms);
            const foundFilm = films.find((film) => film.id === parseInt(id));
            setFilm(foundFilm);
        }
    }, [id]);

    const handleEdit = () => {
        navigate(`/film/${id}/edit`);
    };

    const handleDelete = () => {
        const storedFilms = localStorage.getItem("films");
        if (storedFilms) {
            const films = JSON.parse(storedFilms);
            const updatedFilms = films.filter((item) => item.id !== parseInt(id));
            localStorage.setItem("films", JSON.stringify(updatedFilms));

            navigate("/films");
        }
    };

    const options = [
        { label: "Modifier", action: handleEdit },
        { label: "Supprimer", action: handleDelete, danger: true },
    ];

    return (
        <main className="relative min-h-[calc(100dvh-64px)] md:p-8 p-4">
            {film.poster && (
                <>
                    <img
                        src={film.poster}
                        alt={film.title}
                        className="absolute -top-[64px] left-0 h-96 w-full object-cover -z-10"
                    />
                    <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-b from-transparent via-zinc-950/90 to-zinc-950" />
                </>
            )}
            <div className="relative w-full max-w-screen-2xl mx-auto">
                <h1 className="text-3xl font-bold">{film.title}</h1>
                <div className="mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span
                            key={index}
                            className="text-2xl"
                            style={{ color: index < (film.rating || 0) ? "#FFD700" : "#CCC" }}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <Dropdown options={options} />
                <p className="text-gray-300 text-4xl font-medium mt-72">{film.comment ? `❝ ${film.comment} ❞` : "Aucun commentaire"}</p>
            </div>
        </main>
    );
}
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FilmForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [films, setFilms] = useState(() => {
        const storedFilms = localStorage.getItem("films");
        return storedFilms ? JSON.parse(storedFilms) : [];
    });

    const [error, setError] = useState(null);
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);
    const [filmData, setFilmData] = useState({
        title: "",
        poster: "",
        comment: "",
    });

    useEffect(() => {
        if (films === null || films.length === 0) {
            setError("Aucune donnée de films disponible.");
        } else {
            setError(null);
        }
    }, [films]);

    useEffect(() => {
        if (id) {
            const filmToEdit = films.find((film) => film.id === parseInt(id));
            if (filmToEdit) {
                setFilmData(filmToEdit);
                setRating(filmToEdit.rating);
            }
        }
    }, [id, films]);

    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const newFilm = {
            id: id ? parseInt(id) : Date.now(),
            title: formData.get("title"),
            poster: formData.get("poster"),
            rating,
            comment: formData.get("comment"),
        };

        if (id) {
            setFilms((prevFilms) =>
                prevFilms.map((film) =>
                    film.id === newFilm.id ? newFilm : film
                )
            );
        } else {
            setFilms((prevFilms) => [...prevFilms, newFilm]);
        }

        form.reset();
        setRating(0);
        setHover(0);
        navigate("/films");
    };

    const isFormValid = filmData.title && !error;

    return (
        <main className="flex justify-center min-h-[calc(100dvh-64px)] w-full max-w-screen-2xl mx-auto md:p-8 p-4">
            <div className="max-w-96 w-full">
                <h1 className="text-3xl font-medium text-white">
                    {id ? "Modifier le film" : "Ajouter un film"}
                </h1>

                {error && <p className="text-red-500">{error}</p>}

                <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-4 pt-3 pb-6">
                    <input
                        name="title"
                        id="title"
                        className="flex h-9 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 ring-white disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Titre"
                        value={filmData.title}
                        onChange={(e) =>
                            setFilmData({ ...filmData, title: e.target.value })
                        }
                    />

                    <input
                        name="poster"
                        type="text"
                        id="poster"
                        className="flex h-9 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 ring-white disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Lien de l'affiche"
                        value={filmData.poster}
                        onChange={(e) =>
                            setFilmData({ ...filmData, poster: e.target.value })
                        }
                    />

                    <div className="flex justify-between items-center w-full">
                        <p>Note</p>
                        <div>
                            {Array.from({ length: 5 }, (_, index) => {
                                const starValue = index + 1;
                                return (
                                    <span
                                        key={starValue}
                                        className="text-2xl cursor-pointer"
                                        style={{
                                            color:
                                                starValue <= (hover || rating)
                                                    ? "#FFD700"
                                                    : "#CCC",
                                        }}
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <textarea
                        name="comment"
                        id="comment"
                        className="flex min-h-[60px] max-h-96 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        placeholder="Commentaire"
                        value={filmData.comment}
                        onChange={(e) =>
                            setFilmData({ ...filmData, comment: e.target.value })
                        }
                    ></textarea>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-1 outline-offset-4 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-zinc-950 shadow hover:bg-gray-50/90 h-9 py-2 px-4"
                    >
                        {id ? "Modifier" : "Ajouter"}
                    </button>
                </form>
            </div>
        </main>
    );
}

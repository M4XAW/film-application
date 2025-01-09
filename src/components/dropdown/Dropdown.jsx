import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    // Ferme le menu si on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left w-[180px]" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex h-9 items-center justify-between whitespace-nowrap rounded-md border border-neutral-800 bg-zinc-950 py-2 px-4 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                Options
            </button>

            {isOpen && (
                <ul
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-800 bg-zinc-950 p-1.5 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="listbox"
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={option.action}
                            className={`flex justify-between items-center cursor-pointer select-none relative py-1.5 px-2.5 rounded hover:bg-neutral-800 ${index < options.length - 1 ? 'mb-1' : ''}`}
                            role="option"
                        >
                            {option.label}
                            {option.selected && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-3 h-3"
                                >
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

import { Link } from "react-router-dom"
import { Clapperboard } from 'lucide-react';
import { Plus } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-20 w-full border-b border-neutral-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex justify-between items-center h-16 max-w-screen-2xl md:px-8 px-4">
                <nav className="flex items-center space-x-4">
                    <Link to='/' className="flex items-center align-center text-sm text-white font-bold transition-colors">
                        <Clapperboard size={24} className='text-white mr-2' />            
                        CineScore
                    </Link>
                    <Link to='/films' className="text-sm text-white/60 hover:text-white/100 transition-colors">Mes films</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link to='/login' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-1 outline-offset-4 disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-zinc-950 shadow hover:bg-gray-50/90 h-9 py-2 pl-3.5 pr-4">
                        <Plus size={16} className='text-zinc-950 mr-2' />
                        Ajouter un film
                    </Link>
                </div>
            </div>
        </header>
    )
}

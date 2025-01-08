import { Clapperboard } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="container mx-auto flex justify-between items-center max-w-screen-2xl md:px-8 px-4">
            <div className="flex justify-between items-center flex-wrap gap-4 w-full border-t border-neutral-800 bg-white/80 dark:bg-zinc-950/80 md:py-8 py-4">
                <a className="flex items-center align-center text-sm text-white font-bold transition-colors" href="/">
                    <Clapperboard size={24} className='text-white mr-2' />            
                    CineScore
                </a>
                <p className="text-white/60 text-sm font-light">© 2025 Logo. All rights reserved.</p>
            </div>
        </footer>
    )
}

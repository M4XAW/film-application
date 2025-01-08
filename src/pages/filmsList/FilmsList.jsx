import React from 'react'

export default function FilmsList() {
  return (
    <main className="min-h-[calc(100dvh-64px)] w-full max-w-screen-2xl mx-auto md:p-8 p-4">
        <h1 className='text-white text-3xl font-medium mb-3'>Mes films</h1>
        <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
                <caption className="mt-4 text-sm">A list of your recent invoices.</caption>
                <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <th className="h-10 px-2 text-left text-white/60 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] w-[100px]">Titre</th>
                        <th className="h-10 px-2 text-left text-white/60 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Commentaire</th>
                        <th className="h-10 px-2 text-left text-white/60 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Note</th>
                        <th className="h-10 px-2 align-middle text-white/60 font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="text-left [&amp;_tr:last-child]:border-0">
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV001</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Paid</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Credit Card</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$250.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV002</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Pending</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">PayPal</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$150.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV003</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Unpaid</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Bank Transfer</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$350.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV004</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Paid</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Credit Card</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$450.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV005</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Paid</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">PayPal</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$550.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV006</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Pending</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Bank Transfer</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$200.00</td>
                    </tr>
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] font-medium">INV007</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Unpaid</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">Credit Card</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$300.00</td>
                    </tr>
                </tbody>
                <tfoot className="border-t bg-muted/50 font-medium [&amp;>tr]:last:border-b-0">
                    <tr className="border-b border-white/15 transition-colors hover:bg-white/5 data-[state=selected]:bg-muted">
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" colSpan={3}>Total</td>
                        <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] text-right">$2,500.00</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </main>
  )
}

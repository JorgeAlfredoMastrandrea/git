// agregamos esta línea
import { montserrat } from './ui/fonts';
import './ui/global.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialised`}>
        <h1>Título</h1>
        <div style={{ border: '1px solid #000' }}>
          {children}
          <footer className='py-10 flex justify-center items-center'>
            Hecho con amor por la gente de vercel
          </footer>
        </div>
      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      // Latar belakang menggunakan gambar yang anda muat naik, dengan fallback warna kecerunan pink/ungu
      style={{ 
        backgroundImage: `url('/pu3bg.svg')`,
        backgroundColor: '#d87bb0' 
      }}
    >
      {/* Overlay untuk pastikan teks dan logo lebih jelas (pilihan) */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12 text-white text-center">
        
        {/* SECTION 1: Tajuk & Logo */}
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
            PUTERI UMNO PASIR GUDANG
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-4 p-6 rounded-3xl">
            {/* Gantikan src dengan path logo sebenar dalam folder public anda */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center  shadow-md">
                <Image src="/logo-umno.svg" alt="Logo UMNO" width={128} height={128} className="object-contain" />
              </div>
              {/* <span className="text-xs md:text-sm font-semibold">UMNO</span> */}
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-48 md:h-48  rounded-full flex items-center justify-center shadow-md">
                <Image src="/pu3pg-logo.png" alt="Logo Puteri UMNO Malaysia" width={140} height={140} className="object-contain" />
              </div>
              {/* <span className="text-xs md:text-sm font-semibold">Puteri Malaysia</span> */}
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-24 h-24 md:w-32 md:h-32  rounded-full flex items-center justify-center shadow-md">
                <Image src="/pu3malaysia-logo.png" alt="Logo Puteri UMNO Pasir Gudang" width={128} height={128} className="object-contain" />
              </div>
              {/* <span className="text-xs md:text-sm font-semibold">Puteri Pasir Gudang</span> */}
            </div>
          </div>
        </section>

        {/* SECTION 2: Media Sosial */}
        <section className="flex flex-col items-center gap-6 w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold drop-shadow-md">Ikuti Kami Di Media Sosial</h2>
          <div className="flex justify-center gap-6 w-full">
            
            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@pu3umnopg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2-1.74 2.89 2.89 0 0 1 2.89-2.89 2.88 2.88 0 0 1 2.54 1.48l3.18-1.54a6.2 6.2 0 0 0-5.72-3.34 6.34 6.34 0 0 0-6.33 6.33 6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.33-6.32v-5.4a8.16 8.16 0 0 0 4.19 1.13V6.3a4.7 4.7 0 0 1-.99.39z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/pu3pg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/puteri_umnopg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* SECTION 3: Butang Muat Turun */}
        <section className="mt-4">
          <Link 
            href="#" // Gantikan "#" dengan link sebenar buku persidangan nanti
            className="inline-block px-8 py-4 bg-white text-[#d87bb0] font-bold text-lg rounded-full shadow-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
          >
            Muat Turun Buku Persidangan
          </Link>
        </section>

      </div>
    </main>
  );
}

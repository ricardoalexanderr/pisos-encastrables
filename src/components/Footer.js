import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6 text-center">

        {/* Iconos sociales */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://wa.me/5493518000426"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
    
          <a
            href="https://www.facebook.com/share/1CKhACH6W7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Mensaje de amor y fuego */}
        <p className="text-sm text-gray-300 max-w-md leading-relaxed">
  Entre cada rincón y cada junta, se entreteje la esencia del hogar   
  donde el alma se encuentra, y el suelo susurra historias de fuego y calma.  
  Porque cada piso no solo sostiene, sino que acaricia el corazón. ❤️‍🔥
</p>


        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} alex-romero(3512344253). Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

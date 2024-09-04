// src/app/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="container mx-auto flex flex-wrap justify-between items-start border-t border-white pt-8">
        {/* Contato */}
        <div className="w-full md:w-1/3 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Contato</h3>
          <p className="mb-2">Email: contato@empresa.com</p>
          <p className="mb-2">Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
        </div>

        {/* Redes Sociais */}
        <div className="w-full md:w-1/3 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Siga-nos</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Receba as últimas novidades e atualizações.</p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Seu email"
              className="p-2 mb-4 bg-gray-800 text-white border border-white rounded"
            />
            <button className="py-2 bg-white text-black font-bold rounded hover:bg-gray-300">
              Assinar
            </button>
          </form>
        </div>
      </div>

      {/* Linha de baixo */}
      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-gray-400">
        © 2024 Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

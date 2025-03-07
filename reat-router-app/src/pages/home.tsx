import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col itens-center justify-center bg-blue-200">

            <h1 className="text-4xl font-bold text-center">Bem vindo a minha página</h1>
            <p className="text-1sm font-bold text-center">Utilizando Tailwind com React Router</p>
            
            <nav className="nt-4 p-2 bg-blue-300">
                <ul className="flex flex-row justify-center space-x-6">
                    <Link className="m4-4 text-blue-600 hover:text-blue-800" to={"/"}>Inicio</Link>
                    <Link className="m4-4 text-blue-600 hover:text-blue-800" to={"/sobre"}>Sobre nós</Link>
                    <Link className="m4-4 text-blue-600 hover:text-blue-800" to={"/cadastro"}>Cadastre-se</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
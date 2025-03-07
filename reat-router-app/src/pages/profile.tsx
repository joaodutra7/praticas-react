import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Profile: React.FC = () => {

    const { username } = useParams<{username: string}>();

    return (
        <div className="h-screen flex flex-col itens-center justify-center bg-blue-200">

            <h1 className="text-4xl font-bold text-center">Área restrita</h1>
            <p className="text-1sm font-bold text-center">Bem vindo: {username}</p>

        </div>
    );
};

export default Profile;
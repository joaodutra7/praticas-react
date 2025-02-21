import React from "react"
const AnoAtual = new Date().getFullYear()

export default function Footer(){
    return(
        <footer>
            <p>Termos de uso | Política de privacidade</p>
            <hr />
            <p>%copy; {AnoAtual}; Minha aplicação. Todos os direitos reservados</p>
        </footer>

    )
}
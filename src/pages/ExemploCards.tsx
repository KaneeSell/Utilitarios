import { CardsImg } from "../components/CardsImg";
import { Container2 } from "../components/Container";
import LayoutPaiTema from "../components/LayoutPaiTemat";
import { MenuSupertios } from "../components/Menu";
import logo from '../assets/kanee.ico'
import image from '../assets/kanee-fundo.png'

export default function ExemploCards(){
    return (
        <LayoutPaiTema>
            <MenuSupertios logo={logo} logoTitle="Kane'e Logo" title="Utilitarios"/>
            <Container2 tamanho="400" title="Cards Com Fotos">
                <CardsImg title="Exemplo Card 1" imgUrl={image} tamanho="w-70" buttonUrl="#">
                Card com imagem e zoom interativo ao clicar.
                </CardsImg>
                <CardsImg title="Exemplo Card 2" imgUrl={image} tamanho="w-70" buttonUrl="#">
                Este card exibe uma imagem e permite um zoom personalizado ao clicar, proporcionando 
                uma experiência visual aprimorada com navegação intuitiva.
                </CardsImg>
                <CardsImg title="Exemplo Card 3" imgUrl={image} tamanho="w-70" buttonUrl="#">
                Um card interativo que exibe uma imagem e inclui um sistema de zoom personalizado ao 
                ser clicado. Ideal para destacar detalhes visuais de forma fluida e intuitiva, proporcionando 
                uma melhor experiência ao usuário sem comprometer o design responsivo do componente.
                </CardsImg>
            </Container2>
        </LayoutPaiTema>
    )
}
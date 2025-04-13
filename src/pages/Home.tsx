import LayoutPaiTema from "../components/LayoutPaiTemat";
import { MenuSupertios } from "../components/Menu";
import logo from '../assets/kanee.ico'
import { Container1 } from "../components/Container";

export default function Home(){
    return (
        <LayoutPaiTema>
            <MenuSupertios logo={logo} logoTitle="Kane'e Logo" title="Utilitarios"/>
            <Container1 title='Titulo do Container' subtitle="Exemplo de Container" tamanho="200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse est aliquam ea debitis ratione vitae sint quae quo deleniti voluptatibus sunt odit architecto consequuntur ipsam repellendus libero incidunt, dolorem accusantium!
            </Container1>
        </LayoutPaiTema>
    )
}
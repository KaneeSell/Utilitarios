import LayoutPaiTema from "../components/LayoutPaiTemat";
import logo from '../assets/kanee.ico'
import { MenuSupertios, MenuSuperior2, MenuSuperior3 } from "../components/Menu";
import { Container1 } from "../components/Container";

export default function ExempoloMenu(){
    return (
        <LayoutPaiTema>
            <MenuSuperior3 logo={logo} logoTitle="Kane'e Logo" title="Utilitarios" pageTitle="Exemplo Menu"/>
            <Container1 tamanho={'500'} title="Exemplo Menu"
            className="gap-1 flex flex-col"
            classNamePai="w-3/4 pointer-events-none">
                <div className="">
                    <MenuSupertios logo={logo} logoTitle="Kane'e Logo" title="Exemplo"/>
                </div>
                <div>
                    <MenuSuperior2 logo={logo} logoTitle="Kane'e Logo" title="Exemplo" pageTitle="Page Exemplo"/>
                </div>
                <div>
                    <MenuSuperior3 logo={logo} logoTitle="Kane'e Logo" title="Exemplo" pageTitle="Page Exemplo"/>
                </div>
            </Container1>
        </LayoutPaiTema>
    )
}
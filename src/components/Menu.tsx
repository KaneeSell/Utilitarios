import $ from 'jquery'
import { useState } from 'react'
import { IoHomeOutline, IoMenu } from "react-icons/io5"
import { useNavigate } from 'react-router'
import { ThemeBtnReduzido } from './ThemeButton'
import { FaRegBell, FaRegUserCircle } from 'react-icons/fa'

interface MenuSupertiosProps{
    logo: string
    logoTitle:string
    title: string
}
export function MenuSupertios(props : MenuSupertiosProps){
    const corDestaque = `dark:text-purple-700 text-purple-700`
    const coresTema = `dark:bg-gray-600 dark:text-gray-100
            bg-gray-300 text-gray-900`
    const menuSuperior = `w-full flex flex-row flex-nowrap justify-between 
            p-1 text-center items-center ${coresTema}`
    const menuLateral = `flex-col h-screen w-45 fixed z-2 flex 
            justify-between ${coresTema}`
    const btnNavBarSuperior = `p-1 rounded-full cursor-pointer dark:hover:bg-black/50
        text-gray-900 dark:text-gray-100 hover:bg-white/50`
    const navegarPara = useNavigate()
    const[toggleMenu, setToggleMenu] = useState(false)
    const navegacao = `hover:bg-black/20 w-full text-center py-1 text-lg ps-3
    font-semibold cursor-pointer flex flex-row gap-2 items-center justify-start
    ${corDestaque}`
    function navegar(url:string){
        toggleMenuLateral()
        navegarPara(url)
    }
    function toggleMenuLateral(){
        if(toggleMenu){
            $('#menuLateral').animate({left: '-100%'},400)
            $('#modal').fadeToggle(400)
        } else {
            $('#menuLateral').animate({left: '0%'},400)
            $('#modal').fadeToggle(400)
        }
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            {/* Menu Superior */}
            <div className={menuSuperior}>
                <div className="flex flex-row items-center gap-2 cursor-pointer"
                onClick={()=>navegar('./')}>
                    <img src={props.logo} alt={props.logoTitle} width={'40px'}/>
                    <span className={`${corDestaque} text-xl font-semibold`}>
                        {props.title}
                    </span>
                </div>
                <div className='flex flex-row items-center gap-3 me-2'>
                    <ThemeBtnReduzido size='25px' icones='icones-5'/>
                    <FaRegBell className={btnNavBarSuperior} size={'30px'}/>
                    <FaRegUserCircle className={btnNavBarSuperior} size={'30px'}/>
                    <IoMenu size={'35px'} className={`
                        hover:text-gray-30 cursor-pointer
                        `} onClick={()=>toggleMenuLateral()}/>
                </div>
            </div>
            {/* Modal */}
            <div id='modal'
            onClick={()=>toggleMenuLateral()}
            className={`
            w-full h-screen hidden bg-black/50 absolute z-1
                `}>
            </div>
            {/* Menu Lateral */}
            <div id='menuLateral'
            style={{'left':'-100%'}}
            className={menuLateral}>
                <div className='flex flex-col gap-1 pt-2'>
                    <div onClick={()=>navegar('/')}
                    className={`
                    flex flex-row items-center gap-2 cursor-pointer
                    border-b-1 pb-2
                    `}>
                        <img src={props.logo} alt={props.logoTitle} width={'40px'}/>
                        <span className={`
                            ${corDestaque}
                            text-xl font-semibold
                            `}>
                            {props.title}
                        </span>
                    </div>
                    <span className={navegacao}
                    onClick={()=>navegar('/')}>
                        <IoHomeOutline size={'20px'}/>
                        Início</span>
                    <span className={navegacao}
                    onClick={()=>navegar('/exemplo-cards')}>
                        <IoHomeOutline size={'20px'}/>
                        Exemplo Cards</span>
                    <span className={navegacao}
                    onClick={()=>navegar('/pagina-3')}>
                        <IoHomeOutline size={'20px'}/>
                        Pagina 3</span>
                    <span className={navegacao}
                    onClick={()=>navegar('/pagina-4')}>
                        <IoHomeOutline size={'20px'}/>
                        Pagina 4</span>
                    <span className={navegacao}
                    onClick={()=>navegar('/pagina-5')}>
                        <IoHomeOutline size={'20px'}/>
                        Pagina 5</span>
                </div>
                <div className='flex flex-col justify-start mb-15'>
                    <span className={navegacao}>
                        <IoHomeOutline size={'20px'}/>
                        Suporte
                    </span>
                </div>
            </div>
        </>
    )
}
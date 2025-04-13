import ExpandirImg from "./ExpandirImg"

interface CardsImgProps{
    imgUrl:string
    title: string
    tamanho: 'w-70' | 'w-80' | 'w-90' | 'w-100' | 'w-110' | 'w-120'
    buttonTitle?:string
    buttonUrl?:string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export function CardsImg(props: CardsImgProps){
    const corDestaque = `dark:text-purple-700 text-purple-700`
    const corTema = `dark:border-gray-500 dark:bg-black/15
                     border-gray-900 bg-black/15`
    function renderButton(){
        return (
            <div className="flex justify-start items-center pb-4 px-3">
                <a className={`
                    bg-blue-600 rounded text-gray-100 py-1 px-3 cursor-pointer
                    hover:bg-blue-700 hover:duration-300 hover:animate-pulse
                    `} target='_blank'>
                    {props.buttonTitle ? props.buttonTitle : 'Ir Para a Página'}
                </a>
            </div>
        )
    }
    return (
        <div className={`${corTema} border-2 rounded ${props.tamanho}`}>
            <ExpandirImg img={props.imgUrl} alt={props.title} />
            <div className="flex flex-col my-2 mx-3">
                <span className={`${corDestaque}
                font-bold text-lg mb-3
                `}>{props.title}</span>
                <span className={`
                px-2 text-base text-center
                h-35 overflow-y-auto font-semibold scrollbar-personalizada
                `}>{props.children}</span>
            </div>
            {props.buttonUrl && renderButton()}
        </div>
    )
}
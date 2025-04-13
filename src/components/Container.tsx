interface Container1Props{
    title?:string
    subtitle?:string
    tamanho: '100' | '200' | '300' | '400' | '500'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export function Container1(props: Container1Props){
    const corDestaque = `dark:text-purple-700 text-purple-700`
    const corTema = `dark:border-gray-500 dark:bg-black/15
                     border-gray-900 bg-black/15`
    const childrenTema = `text-gray-900 dark:text-gray-100`
    return (
        <div className={`${corTema}
        flex flex-col p-4 m-2 rounded-xl border-2 ${`max-w-` + props.tamanho}
        `}>
            {props.title && <span className={`${corDestaque}
            text-2xl font-bold
            `}>{props.title}</span>}
            {props.subtitle && <span className={`${corDestaque} 
            text-base
            `}>{props.subtitle}</span>}
            {props.title && <hr className={`${corTema} my-2`}/>}
            <div className={`${childrenTema}`}>
                {props.children}
            </div>
        </div>
    )
}
interface Container2Props{
    title?:string
    subtitle?:string
    tamanho: '100' | '200' | '300' | '400' | '500'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}
export function Container2(props: Container2Props){
    const corDestaque = `dark:text-purple-700 text-purple-700`
    const corTema = `dark:border-gray-500 dark:bg-black/15
                     border-gray-900 bg-black/15`
    const childrenTema = `text-gray-900 dark:text-gray-100`
    return (
        <div className={`${corTema}
        flex flex-col p-4 m-2 rounded-xl border-2 ${`max-w-` + props.tamanho}
        `}>
            {props.title && <span className={`${corDestaque}
            text-2xl font-bold
            `}>{props.title}</span>}
            {props.subtitle && <span className={`${corDestaque} 
            text-base
            `}>{props.subtitle}</span>}
            {props.title && <hr className={`${corTema} my-2`}/>}
            <div className={`${childrenTema} flex flex-row gap-2 flex-wrap items-center justify-center`}>
                {props.children}
            </div>
        </div>
    )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LayoutPaiTema(props : any){
    const corTema = `text-gray-900 bg-gray-200 
                dark:bg-gray-700 dark:text-gray-100`
    return (
        <div className={`${corTema}
         flex flex-col h-full min-h-screen w-full items-center text-center
        `}>
            {props.children}
        </div>
    )
}
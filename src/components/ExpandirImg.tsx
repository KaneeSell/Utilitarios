import $ from 'jquery'
import { ImZoomIn, ImZoomOut } from 'react-icons/im'
import { MdOutlineZoomOutMap, MdZoomInMap } from 'react-icons/md'
import { TbZoomScan } from 'react-icons/tb';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
interface ExpandirImgProps{
    img: string
    alt: string
    id?: number
}
export default function ExpandirImg(props: ExpandirImgProps){
    function toggleModal(){
        $(`#modalExpandirImg-${props.id}`).fadeToggle(300)
        if($("body").css("overflow-y") == 'hidden'){
            $("body").css("overflow-y", "scroll")
        }else{
            $("body").css("overflow-y", "hidden")
        }
    }
    const Controles = () => {
        const { zoomIn, zoomOut, resetTransform } = useControls()
        const controlesBtn = `
        cursor-pointer bg-purple-700 text-green-100 p-2 rounded border-1
        `
        return (
            <div className={`
            fixed text-bold left-5/11 top-2 z-1 flex flex-row gap-3
            `}>
                <button className={`
                    fixed right-2 top-2 bg-purple-700 p-2 border-1
                    rounded text-gray-100 text-bold cursor-pointer
                    `}
                    onClick={()=>toggleModal()}>
                    <MdZoomInMap size={'40px'}/>
                </button>
                <button onClick={()=>zoomIn()}>
                    <ImZoomIn className={controlesBtn}
                    size={'50px'}/>
                </button>
                <button onClick={()=>zoomOut()}>
                    <ImZoomOut className={controlesBtn}
                    size={'50px'}/>
                </button>
                <button onClick={()=>resetTransform()}>
                    <TbZoomScan className={controlesBtn}
                    size={'50px'}/>
                </button>
            </div>
        )
    }
    const Imagem = () => {
        return (
            <div onClick={(e) => e.stopPropagation()}
            className='w-full h-full flex justify-center items-center'>
                <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}>
                    {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                    {({ zoomIn, zoomOut, resetTransform, ..._rest }) => {
                        void _rest;
                        return (
                            <>
                                <Controles />
                                <TransformComponent>
                                    <img src={props.img} alt={props.alt}
                                    className={`
                                    max-w-full max-h-full object-contain
                                    `}/>
                                </TransformComponent>
                            </>
                        );
                    }}
                </TransformWrapper>
            </div>
        )
    }

    return (
        <>
            <div className='w-full aspect-[16/9] overflow-hidden bg-gray-200 relative group'>
                <img src={props.img} alt={props.alt}/>
                <button className={`
                    hidden group-hover:flex absolute top-0 left-0 w-full h-full
                    justify-center items-center bg-black/30 cursor-pointer
                    `}
                    onClick={toggleModal}>
                    <MdOutlineZoomOutMap 
                    className={`text-white`}
                    size={'40px'}/>    
                </button>
                <div id={`modalExpandirImg-${props.id}`}
                className={`
                fixed left-0 top-0 hidden flex-col justify-start items-center 
                h-screen w-full bg-black/30 z-2
                `}
                onClick={()=>toggleModal()}>
                    <div
                    className={`
                    fixed z-3 flex px-3 py-4 justify-center items-start max-h-50 w-full
                    `}>
                        <Imagem />
                    </div>
                </div>
            </div>
        </>
    )
}
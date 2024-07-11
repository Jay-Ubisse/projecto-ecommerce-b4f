import { LockKey, X } from "@phosphor-icons/react"


export const ShoppingCard = () => {
    const styleDiv = 'flex justify-between items-center'
    return (

        <div   className="bg-black/45 absolute z-10  ">
            <div className="flex flex-col gap-2 p-2 bg-white  text-black w-[22%] 2xl:mt-[844px] 2xl:h-screen  2xl:ml-[1420px] ">
            <div className="flex   justify-between gap-44 items-center">
                <h1 className="font-bold text-xl">A minha carrinha </h1>
                <X size={20} />
            </div>
            <p className="text-zinc-400">A sua carrinha está vazia. Adicione produtos à carrinha.</p>
            <div className="border-t-2 border-b-2 pt-2 pb-2">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>0 MT</span>

                </div>
                <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>0 MT</span>

                </div>
                <div className="flex justify-between">
                    <span>Total</span>
                    <span>0 MT</span>

                </div>

              
            </div> 
            <button className="bg-sky-blue-200 rounded-md text-white  font-semibold hover:bg-sky-blue-100 hover:text-black cursor-pointer hover:duration-700">Checkout</button>
            <div className="flex gap-2 justify-center">
                <span className="mt-2"> <LockKey/></span>
                <p className="text-black">Compra segura</p>

            </div>
        </div> 
        </div>
       
    )
}
export const Form = () => {
  return (
    <>
        <div className=" flex justify-center items-center border rounded-2xl border-sky-blue-100 z-10 bg-white ">
            <div className="w-[25rem] flex-1 flex justify-center items-center m-2">
              <img src="src\components\contact\woman.jpg" alt="mulher ao celular" className="w-[26rem] h-[27rem] rounded-2xl" />
            </div>
            <form action="" className="text-sky-blue-200 flex flex-col w-full flex-1 space-y-4 m-2 shadow-slate-400">
                <input type="text" name="name" placeholder="Escreva aqui o seu nome" className="w-[25rem] border-b-[2px] border-b-sky-blue-200 bg-slate-50 outline-none placeholder-sky-blue-200 py-3"/>
                <input type="email" name="E-mail" placeholder="Digite o seu email" className="w-[25rem] border-b-[2px] border-b-sky-blue-200 bg-slate-50 outline-none placeholder-sky-blue-200 py-3" />
                <textarea name="Mensagem" id="" cols="20" rows="10" placeholder="Mensagem" className="w-[25rem] border-b-[2px] border-b-sky-blue-200 bg-slate-50 outline-none placeholder-sky-blue-200 py-3"></textarea>
                <button type="submit" className="w-full bg-sky-blue-200 text-white rounded-md h-10" >Enviar</button>
            </form>
        </div>
    </>
)
}
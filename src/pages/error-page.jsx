import { Link } from "react-router-dom"
import { Header } from "../components/header"


export const ErrorPage = () =>{
    return (
        <div>
            <Header/>
            <main className="">
                <div className="flex justify-center py-4">
                <div className="w-1/5 border-b-black">
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Sapiente at impedit eum corporis tenetur officia aspernatur.
                  Quasi voluptate similique tempore at aspernatur placeat veritatis nulla,
                   error labore repellat eligendi tempora!</p>


                   <div>
                   <Link to ='/'> <button className="text-white text-sm border-black border-spacing-4 rounded-2xl bg-black/70 w-40 h-9 hover:bg-sky-blue-200 hover:transition-all duration-700 ease-in-out hover:w-44 m- ">Back To Homepage</button></Link>
                   </div>
                   </div>
                </div>
            </main>
        </div>
    )
}
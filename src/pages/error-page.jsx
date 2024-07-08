import { Link } from "react-router-dom"
import { Header } from "../components/header"


export const ErrorPage = () =>{
    return (
        <div>
            <Header/>
            <main >
                <div className="flex justify-center py-4">
                <div className="w-1/5 border-b-black">
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Sapiente at impedit eum corporis tenetur officia aspernatur.
                  Quasi voluptate similique tempore at aspernatur placeat veritatis nulla,
                   error labore repellat eligendi tempora!</p>

                <button className="text-sky-blue-200"><Link to ='/'>Home</Link></button>
                </div>
                </div>
            </main>
        </div>
    )
}
"use client"
import { EventHandler, FormEventHandler, useState } from 'react'
import './contacto.css'
const Page = () => {
    const [nombre, setNombre] = useState('')
    const [asunto, setAsunto] = useState('')
    const [comentario, setComentario] = useState('')
    const [email, setEmail] = useState('')
    const handleForm = async(e: any) => {
        let data = {
            nombre: nombre,
            asunto: asunto,
            comentario: comentario,
            email: email
        }
        const formData = new FormData()
        formData.append('nombre',data.nombre)
        formData.append('asunto',data.asunto)
        formData.append('comentario',data.comentario)
        formData.append('email',data.email)

        e.preventDefault()
        const response = await fetch('https://wefix-tecnicos.vercel.app/api/contact', {
            method: 'POST',
            body: formData
        })
        const datas = await response.json()
        console.log(datas)
    }
    return (
        <main className='flex justify-center text-center'>
            <section>
                <form onSubmit={handleForm} encType='multipart/form-data'>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name='nombre' onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="asunto">Asunto</label>
                        <input type="text" name='asunto' onChange={(e) => setAsunto(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="comentario">Comentario</label>
                        <textarea onChange={(e) => setComentario(e.target.value)} name='comentario' placeholder='Introduzca su comentario...' className='text-left block border-2 border-black w-full h-24 rounded p-1'></textarea>
                    </div>
                    <div>
                        <input type="submit" className='border-black text-black hover:text-white hover:bg-black transition-colors cursor-pointer' />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Page
import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Crítica e sugestão</h1>
            <p className='text-center mb-6'>O restaurante Gued's sempre busca por atender melhor seus clientes.<br />
                                       Por isso, estamos sempre abertos a ouvir sua opnião.</p>
            <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu nome:</label>
                <input type='text' className='p-4 block shadow border-2	border-yellow-500 my-2 rounded hover:border-yellow-400' />
            </div>
        </div>
    )
}
export default Pesquisa
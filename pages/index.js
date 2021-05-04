import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

const Index = () => {
    return (
        <div>
            <p className='mt-12 text-center ' >
                O  restaurante Gued's sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir sua opnião.
            </p>
            <div className='text-center' >
         
                
                <button className='bg-yellow-600 mx-8 my-8 px-10 py-4 font-bold rounded-lg shadow-lg ' >
                
                    Dar opnião ou sugestão
                    
                </button>
                
            </div>
            <p className='my-4 text-center ' >
                O  restaurante Gued's sempre busca por atender melhor seus clientes. <br/>
                Por isso, estamos sempre abertos a ouvir sua opnião.
            </p>
          
        </div>
    )
}

export default Index

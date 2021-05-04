import React from 'react'

const Footer = () => {
    return (
        <div className='bg-yellow-600 p-4'>
           <div className='container mx-auto text-center font-bold'> 
               Projeto desenvolvido por: Lais Guedes / {' '}
               <a className='hover:underline' href='https://br.linkedin.com/in/lais-guedes-692476115'>Linkedin</a> / {' '}
               <a className='hover:underline' href='https://github.com/GuedesLais'>GitHub</a>  
           </div> 
        </div>

    )
}
export default Footer
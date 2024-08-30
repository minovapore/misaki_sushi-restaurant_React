import hero from '../assets/img/hero.png'
import './Header.css'

export default function Header(){
    return(
        // <div className='my-5 mx-auto bg-cover hero-img text-center'>
        //     <div className="text-white md:right-64 lg:right-96 md:ms-96 md:ps-80 lg:ms-96 lg:ps-96 ms-auto ps-0">
        //             <h1 className="md:pt-44 sm:pt-2">MISAKI SUSHI & RESTAURANT</h1>
        //             <p className="md:max-w-md max-w-sm mx-auto my-3">Misaki sushi & restaurant offre un'esperienza culinaria dove i clienti possono gustare un'ampia varietà di piatti giapponesi, in un ambiente elegante e moderno. L’esperienza è pensata per essere rilassante e socializzante, permettendo ai clienti di condividere e scoprire nuovi sapori in un ambiente raffinato ma informale.</p>
        //             <div className=''>
        //             <button className="button w-36 font-semibold text-sm mb-3">PRENOTA ORA</button>

        //             </div>
        //     </div>
        // </div>

        <div className='relative xl:w-11/12 md:w-11/12 w-11/12 mx-auto my-5'>
            <img className='hero-img absolute inset-0 object-cover w-full' src={hero} alt="" />
            <div className='flex justify-end'>
              <div className='relative text-center max-w-md text-white xl:my-24 xl:me-36 md:my-24 md:me-6'>
                    <h1 className='text-xl md:text-6xl lg:text-6xl fon-bold'>MISAKI SUSHI & RESTAURANT</h1>
                    <p className='text-sm px-3 xl:px-0 md:px-0 md:text-xl lg:text-xl md:my-3 xl:my-3 my-1'>Misaki sushi & restaurant offre un'esperienza culinaria dove i clienti possono gustare un'ampia varietà di piatti giapponesi, in un ambiente elegante e moderno. L’esperienza è pensata per essere rilassante e socializzante, permettendo ai clienti di condividere e scoprire nuovi sapori in un ambiente raffinato ma informale.</p>
                    <button className='bg-red-600 text-white py-2 px-4 rounded-none hover:bg-red-700'>PRENOTA ORA</button>
              </div>
            </div>
        </div>
    );
}
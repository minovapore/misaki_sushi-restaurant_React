import hero from '../assets/img/hero.png'
import './Header.css'

export default function Header(){
    return(
        <div className='hero-img my-7'>
            <div className="py-36 ps-64 ms-96 text-center text-white">
                <div className="">
                    <h1 className="text-2xl font-bold ps-2">MISAKI SUSHI & RESTAURANT</h1>
                    <p className="ps-52 py-6 max-w-2xl text-xl">Misaki sushi & restaurant offre un'esperienza culinaria dove i clienti possono gustare un'ampia varietà di piatti giapponesi, in un ambiente elegante e moderno. L’esperienza è pensata per essere rilassante e socializzante, permettendo ai clienti di condividere e scoprire nuovi sapori in un ambiente raffinato ma informale.</p>
                    <button className="button w-36 font-semibold text-sm">PRENOTA ORA</button>
                </div>
            </div>
        </div>
    );
}
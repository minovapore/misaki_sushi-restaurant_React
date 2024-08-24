import './HomeSection.css'
import interno from '../assets/img/interno.jpg'
import piatto from '../assets/img/piatto sushi.jpeg'

export default function Section(){
    return (
        <>
        <div className="bg-size my-6 mx-auto flex justify-center">
            <div className='text-black max-w-3xl my-16 pe-5'>
                <h2 className='font-bold text-8xl text-start'>DESIGN</h2>
                <h2 className='font-bold text-8xl text-start'>ED</h2>
                <h2 className='font-bold text-8xl mb-7 text-start'>ELEGANZA</h2>
                <p className='text-3xl text-start'>Spazi riservati, ideali per ogni occasione. Il design contemporaneo di misaki sushi & restaurant, ti accoglie e ti avvolge.</p>
            </div>
            <div>
                <img className='img-size' src={interno} alt="ristorante" />
            </div>
        </div>
        <div className="bg-size my-6 mx-auto flex justify-center">
            <div>
                <img className='img-size' src={piatto} alt="ristorante" />
            </div>
            <div className='text-black max-w-3xl my-16 ps-5'>
                <h2 className='font-bold text-8xl text-end'>FRESCHEZZA</h2>
                <h2 className='font-bold text-8xl text-end'>E</h2>
                <h2 className='font-bold text-8xl mb-7 text-end'>AMORE</h2>
                <p className='text-3xl text-end'>La massima attenzione nello scegliere solo ingredienti freschissimi, osservando rigorosamente tutti gli alti standard di legge.</p>
            </div>
        </div>
        </>
    );
}
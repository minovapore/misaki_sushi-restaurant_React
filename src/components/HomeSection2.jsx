import storeSign from '../assets/img/Store Sign.jpg'

export default function HomeSection2(){
    return(
        <div className="my-6 bg-size mx-auto flex justify-center">
        <div className='text-black max-w-3xl my-4 pe-10'>
            <h2 className='font-bold text-6xl text-start'>VISITACI</h2>
            <p className='text-3xl text-start my-2'>Ci troviamo in Via delle Rose, 123
            00100 Roma, Italia</p>
            <h2 className='font-bold text-6xl text-start my-5'>ORARI DI APERTURA</h2>
            <p className='text-3xl text-start'>Dal Lunedì alla Domenica, chiuso il Martedì</p>
            <p className='text-3xl text-start my-2'>Pranzo 12:15 – 14:45</p>
            <p className='text-3xl text-start'>Cena 19:30 – 23:45</p>
            <h2 className='font-bold text-6xl text-start my-5'>CONTATTACI</h2>
            <p className='text-3xl text-start'>347 123 4567</p>
            <p className='text-3xl text-start my-2'>misakisushi&restaurant@mail.com</p>
        </div>
        <div>
            <img className='img-size' src={storeSign} alt="storeSign" />
        </div>
    </div>
    );
}
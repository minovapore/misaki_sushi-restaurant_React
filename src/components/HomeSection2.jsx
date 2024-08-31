import storeSign from '../assets/img/Store Sign.jpg'

export default function HomeSection2(){
    return(
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto xl:my-10 md:my-10 my-5">
        <div className='text-black max-w-3xl my-4'>
            <h2 className='font-bold xl:text-6xl md:text-4xl text-4xl xl:text-start md:text-start text-center my-2'>VISITACI</h2>
            <p className='xl:text-3xl md:text-2xl text-2xl xl:text-start md:text-start text-center'>Ci troviamo in Via delle Rose 123</p>
            <p className='xl:text-3xl md:text-2xl text-2xl xl:text-start md:text-start text-center'>00100 Roma, Italia</p>
            <h2 className='font-bold xl:text-6xl md:text-4xl text-4xl xl:my-2 my-3 xl:text-start md:text-start text-center'>ORARI DI APERTURA</h2>
            <p className='xl:text-3xl md:text-2xl text-2xl  xl:text-start md:text-start text-center'>Dal Lunedì alla Domenica, chiuso il Martedì</p>
            <p className='xl:text-3xl md:text-2xl text-2xl  xl:text-start md:text-start text-center'>Pranzo 12:15 – 14:45</p>
            <p className='xl:text-3xl md:text-2xl text-2xl  xl:text-start md:text-start text-center'>Cena 19:30 – 23:45</p>
            <h2 className='font-bold xl:text-6xl md:text-4xl text-4xl xl:my-2 my-3 xl:text-start md:text-start text-center'>CONTATTACI</h2>
            <p className='xl:text-3xl md:text-2xl text-2xl  xl:text-start md:text-start text-center'>347 123 4567</p>
            <p className='xl:text-3xl md:text-2xl text-2xl  xl:text-start md:text-start text-center'>misakisushi&restaurant@mail.com</p>
        </div>
        <div className='flex items-center'>
            <img src={storeSign} alt="storeSign" />
        </div>
    </div>
    );
}
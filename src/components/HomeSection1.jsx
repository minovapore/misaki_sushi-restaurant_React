import './HomeSection1.css';
import PrenotaTavolo from '../assets/img/prenota un tavolo.png';
import delivery from '../assets/img/delivery.png';
import takeAway from '../assets/img/take away.png';

export default function CardSection(){
    return(
        <div className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-3 xl:gap-0 md:gap-5 w-11/12">
         <div className="mx-auto card card-compact bg-card shadow-2xl rounded-none border-card xl:w-96 md:w-80 w-80 xl:my-0 md:my-0 my-3">
        <figure>
            <img className='img'
            src={PrenotaTavolo}
            alt="" />
        </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-white">Prenota un tavolo</h2>
                <p className='text-center text-white'>Una cena tra amici o un evento importante, prenota un tavolo e vieni a vivere appieno l’esperienza di Misaki sushi & restaurant.</p>
                <div className="card-actions justify-end">
                    <button className="button mx-auto my-3 text-white font-semibold">PRENOTA IL TAVOLO</button>
                </div>
            </div>
        </div>

       <div className="mx-auto card card-compact bg-card shadow-2xl rounded-none border-card xl:w-96 xl:my-0 md:my-0 my-3">
            <figure>
                <img className='img'
                src={delivery}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-white">Delivery</h2>
                <p className='text-center text-white'>Leggi il menu, aggiungi i prodotti scelti, nome cognome e orario di consegna. Chiamaci, ti risponderemo velocemente.</p>
                <div className="card-actions justify-end">
                    <button className="button mx-auto my-3 text-white font-semibold"><a href="/menù">PRENOTA IL TUO TAKE AWAY</a></button>
                </div>
            </div>
        </div>

        <div className="mx-auto card card-compact bg-card shadow-2xl rounded-none border-card xl:w-96 xl:my-0 md:my-0 my-3">
            <figure>
                <img className='img'
                src={takeAway}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-white">Take away</h2>
                <p className='text-center text-white'>Leggi il menu, aggiungi i prodotti scelti,  ti risponderemo velocemente per fornirti l’orario concordato per il ritiro. Non aspettare vieni personalmente.</p>
                <div className="card-actions justify-end">
                    <button className="button mx-auto my-3 text-white font-semibold"><a href="/menù">ORDINA IL TUO DELIVERY</a></button>
                </div>
            </div>
        </div>
        </div>
    );
}
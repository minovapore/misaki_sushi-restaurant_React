import { useState } from "react";
import MainLayout from "../layout/MainLayout";

export default function Form(){

    //Stati per gestire i valori dei campi del form
    const [name, setName] = useState('');
    const [hour, setHour] = useState('');
    const [date, setDate] = useState('');
    const [seat, setSeat] = useState('');

    const [successAlert, setSuccessAlert] = useState(false);

    //Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault();//previene il comportamento predefinito del form

    //Reset dei campi form
    setName('');
    setHour('');
    setDate('');
    setSeat('');

    //alert di conferma 
    setSuccessAlert(true);
    // Nascondi l'alert dopo 5 secondi
    setTimeout(() => {
      setSuccessAlert(false);
    }, 20000);
    }

    return(
        <MainLayout>
            <div className="md:mt-28 md:mb-44">
                <div className="flex justify-center mt-10 text-center">
                    <h2 className="xl:text-4xl md:text-4xl text-2xl  px-3 font-semibold">Prenota compilando il form qui sotto oppure <br />chiama al numero 347 123 4567</h2>
                </div>
                <form onSubmit={handleSubmit} className="xl:w-1/2 md:w-1/2 w-96 h-auto mx-auto my-10 p-5 bg-black">
                    <div className="w-10/12 mx-auto mt-10 text-white">
                        <h3 className="font-bold text-lg">Nome</h3>
                    <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                        <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className="grow text-black" placeholder="Nome" required/>
                    </label> 
                    </div>
                    <div className="w-10/12 mx-auto mt-5 text-white">
                        <h3 className="font-bold text-lg">Orario</h3>
                    <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                        <input type="number" name="hour"  value={hour} onChange={(e)=> setHour(e.target.value)} className="grow text-black" placeholder="Orario" required/>
                    </label> 
                    </div>
                    <div className="w-10/12 mx-auto mt-5 text-white">
                        <h3 className="font-bold text-lg">Data</h3>
                    <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                        <input type="date" name="date"  value={date} onChange={(e)=> setDate(e.target.value)} className="grow text-black" placeholder="gg/mm/aaaa" />
                    </label> 
                    </div>
                    <div className="w-10/12 mx-auto mt-5 mb-8 text-white">
                        <h3 className="font-bold text-lg">Numero posti</h3>
                    <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                        <input type="number" name="numberSeat"  value={seat} onChange={(e)=> setSeat(e.target.value)} className="grow text-black" placeholder="n° posti" />
                    </label> 
                    </div>
                    {successAlert && (
                    <div role="alert" className="alert alert-success mb-8">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current text-white"
                        fill="none"
                        viewBox="0 0 24 24">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white text-lg font-semibold">Prenotazione avvenuta con successo</span>
                    </div>
                )}
                    <div className="flex justify-center mb-5">
                        <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-none hover:bg-red-700 w-1/2 font-bold text-lg">PRENOTA</button>
                    </div>
                </form>
            </div>
          
        </MainLayout>
    );
}
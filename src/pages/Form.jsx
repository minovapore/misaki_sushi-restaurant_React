import MainLayout from "../layout/MainLayout";

export default function Form(){
    return(
        <MainLayout>
            <div className="w-1/2 h-auto mx-auto my-10 p-5 bg-black">
                <div className="w-10/12 mx-auto mt-14 text-white">
                    <h3>Nome</h3>
                <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                    <input type="text" className="grow" placeholder="Nome" />
                </label> 
                </div>
                <div className="w-10/12 mx-auto mt-5 text-white">
                    <h3>Orario</h3>
                <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                    <input type="text" className="grow" placeholder="Orario" />
                </label> 
                </div>
                <div className="w-10/12 mx-auto mt-5 text-white">
                    <h3>Data</h3>
                <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                    <input type="date" className="grow text-gray-400" placeholder="gg/mm/aaaa" />
                </label> 
                </div>
                <div className="w-10/12 mx-auto mt-5 mb-14 text-white">
                    <h3>Numero posti</h3>
                <label className="input input-bordered flex items-center gap-2 my-2 rounded-none">
                    <input type="text" className="grow" placeholder="n° posti" />
                </label> 
                </div>
                <div className="flex justify-center mb-5">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-none hover:bg-red-700 w-1/2">PRENOTA</button>
                </div>
            </div>
        </MainLayout>
    );
}
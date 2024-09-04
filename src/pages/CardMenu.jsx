import { useContext } from 'react';
import './CardMenu.css';
import { CartContext } from '../CartContext';

export default function CardMenu(props) {
  const {addToCart} = useContext(CartContext);


  return (
    <div className='xl:ms-14 mt-5'>
      <div className="menu-card  md:w-72 md:h-96 w-48 h-80 mx-auto xl:ms-5 mb-5 bg-black">
        <a onClick={() => document.getElementById(`my_modal_4${props.id}`).showModal()}>
            <img className='flex items-center my-10' src={props.image} alt="image" />
            <h4 className="title-card h-24 flex justify-center items-center text-white xl:text-3xl md:text-3xl text-xl font-semibold">{props.name}</h4>
        </a>
        <dialog id={`my_modal_4${props.id}`} className="modal">
          <div className="modal-box w-96 max-w-5xl rounded-none">
            <h3 className="font-bold text-2xl text-center mb-4">{props.name}</h3>
            <div>
              <p className="font-semibold text-lg">Descrizione:</p>
              <p>{props.description}</p>
            </div>
            <div className='my-4'>
              <p className="font-semibold text-lg">Ingredienti:</p>
              <p>{props.ingredients}</p>
            </div>
            <div>
              <p className="font-semibold text-lg">Prezzo:</p>
              <p>{props.price}€</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn me-20 hover:bg-green-700 bg-green-600 text-white font-bold text-lg w-32 rounded-none" onClick={()=>addToCart(item)}>Aggiungi</button>
                <button className="btn hover:bg-red-700 bg-red-600 text-white font-bold text-lg w-32 rounded-none">Chiudi</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
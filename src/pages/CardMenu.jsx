import './CardMenu.css';
import nigiri from '../assets/img/nigiri-salmone.jpg';

export default function CardMenu(props) {
  return (
    <div className='ms-5 my-3'>
      <div className="movie-card ms-5 mb-10 bg-black">
      {/* <a className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}> */}
          <img className='' src={nigiri} alt="image" />
          <h4 className="title-card h-24 flex justify-center items-center text-white text-3xl font-semibold text-md">{props.name}</h4>
      {/* </a> */}
          
          {/* <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Click the button below to close</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog> */}
      </div>
    </div>
  );
}
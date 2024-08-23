import './CardSection.css';

export default function CardSection(props){
    return(
        <div className="card card-compact bg-white w-96 shadow-2xl rounded-none border-card my-5">
            <figure>
                <img className='img'
                src={props.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{props.title}</h2>
                <p className='text-center'>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="button mx-auto my-3 text-white font-semibold">{props.button}</button>
                </div>
            </div>
        </div>
    );
}
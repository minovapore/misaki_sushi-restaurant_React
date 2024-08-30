import './HomeSection1.css';

export default function CardSection(props){
    return(
        <div className="mx-auto card card-compact bg-card shadow-2xl rounded-none border-card xl:w-96 xl:my-0 md:my-0 my-3">
            <figure>
                <img className='img'
                src={props.image}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center text-white">{props.title}</h2>
                <p className='text-center text-white'>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="button mx-auto my-3 text-white font-semibold">{props.button}</button>
                </div>
            </div>
        </div>
    );
}
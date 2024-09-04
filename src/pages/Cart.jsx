import { CartContext } from '../CartContext';
import MainLayout from '../layout/MainLayout';

export default function Cart(){
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
    return(
       <MainLayout>
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Il Tuo Carrello</h2>
            {cartItems.length === 0 ? (
            <p>Il carrello è vuoto.</p>
            ) : (
                cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 border-b">
                    <div>
                    <h3>{item.name}</h3>
                    <p>{item.price} €</p>
                    </div>
                    <div className="flex items-center">
                    <button className="btn btn-sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="btn btn-sm btn-error ml-4" onClick={() => removeFromCart(item.id)}>Rimuovi</button>
                    </div>
                </div>
                ))
            )}
        </div>
       </MainLayout>
    );
}
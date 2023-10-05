
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { remove } from "../store/cartSlice";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
    return (
        <div className="container">
            <h1>Add to Cart</h1>
            <div className="row">
                {cartProducts.map(cartProduct => (

                    < div className="col-md-3 my-2" key={cartProduct.id} >

                        <Card style={{ width: '18rem' }} className="h-100">
                            <div className="text-center">
                                <Card.Img variant="top" src={cartProduct.image} style={{ width: '100px', height: '130px' }} />

                            </div>
                            <Card.Body>
                                <Card.Title>{cartProduct.title}</Card.Title>
                                <Card.Text>
                                    INR:{cartProduct.price}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer style={{ background: "white" }}>
                                <Button variant="primary" onClick={() => removeFromCart(cartProduct.id)}>Remove</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}

            </div>


        </div >

    )

}

export default Cart;
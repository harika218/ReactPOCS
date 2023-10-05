import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";



function Product() {

    const dispatch = useDispatch();



    useEffect(() => {
        //dispatch action for fetch products
        dispatch(getProducts())
    }, [])

    const { data: products, status } = useSelector(state => state.product)

    const addToCart = (product) => {
        dispatch(add(product))
    }
    return (
        <div className="container">
            <h1>Product Dashboard</h1>
            <div className="row">
                {status == 'Loading' ? <p>Loading....</p> : products.map(product => (
                    < div className="col-md-3 my-2" key={product.id} >

                        <Card style={{ width: '18rem' }} className="h-100">
                            <div className="text-center">
                                <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />

                            </div>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    INR:{product.price}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer style={{ background: "white" }}>
                                <Button variant="primary" onClick={() => addToCart(product)}>Add To cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}

            </div>


        </div >

    )


}

export default Product;
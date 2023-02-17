import PageWrapper from "../../components/PageWrapper";
import ItemList from "../../components/ItemList";
import {useState} from "react";
import CardForm from "../../components/Form";

function CartPage(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    const [rerender, setRerender] = useState(false);

    return(
        <PageWrapper>
            <ItemList items={cart} setRerender={setRerender} rerender={rerender} isFavSvg={false} className="item-wrapper--cart"  isCartBtn={false}/>
            {cart.length !== 0 ?
                <>
                    <CardForm setRerender={setRerender}/>
                </>
                :
                <div className="container">
                    <p className="noGoods">Cart is empty for now!</p>
                </div>
            }
        </PageWrapper>
    )
}
export default CartPage;
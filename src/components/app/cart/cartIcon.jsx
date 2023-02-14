import { CartIconStyle } from "./cartIcon.style"
import { ReactComponent as CartIconSVG } from "../../../assets/svg/icon_cart.svg"
import { useCartItems } from "../../app/providers/cartProvider"

const CartIcon = () => {
    const {cardItems} = useCartItems()

    return (
        <CartIconStyle>
            <CartIconSVG />
            <p>du har {cardItems} varer i kurven</p>
        </CartIconStyle>
    )
}

export default CartIcon
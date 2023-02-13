import axios from "axios";
import { useAuth } from "../../providers/authProvider";
import { AddToCartButtonStyle } from "./addtocartbutton.style.js";

const AddToCartButton = props => {

const clickHandle = async () => {

}

    return (
        <AddToCartButtonStyle>
        <AddToCartButton onClick={clickHandle} >
            {props.children}
        </AddToCartButton>
        </AddToCartButtonStyle>
    )
}


export default AddToCartButton
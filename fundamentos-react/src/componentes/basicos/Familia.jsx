import React from "react";
import FamiliaMembro from "./FamiliaMembro"

export default props =>{
    return(
        <div>
            <FamiliaMembro nome = "Denise" sobrenome="Prinsloo"></FamiliaMembro>
            <FamiliaMembro nome = "Fernando" {...props}></FamiliaMembro>
            <FamiliaMembro nome = "Maria" sobrenome="Pereira"></FamiliaMembro>
        </div>
    )
}
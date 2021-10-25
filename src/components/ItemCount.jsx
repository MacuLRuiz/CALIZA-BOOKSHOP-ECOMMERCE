import { useState } from "react"


const ItemCount = ({stock, inicial}) => {
    inicial = 1
    stock = 7

    const [counter, setCounter] = useState(inicial)
            const sumarContador = () =>
                counter <= stock - 1 ? setCounter(counter + 1) : console.log('No hay stock suficiente')
                console.log({stock})
            
            const restarContador = () => 
                counter > 0 ? setCounter(counter - 1) : console.log ('Debés seleccionar una cantidad')


    return(
        <div id="button-container">
            <button class="buttonCount" onClick={sumarContador}>
                <img src="https://icongr.am/octicons/plus.svg?size=47&color=0a91a3" alt="plus" />

            </button>

            <div>
                <p id="counter" >{counter}</p>
            </div>

            <button class="buttonCount" onClick={restarContador}>
                <img src="https://icongr.am/octicons/horizontal-rule.svg?size=47&color=0a91a3" alt="rest" />

            </button>

        </div>
    )
}

export default ItemCount
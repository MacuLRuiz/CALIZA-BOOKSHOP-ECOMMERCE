import { useState } from "react"





const ItemCount = ({stock, inicial, handlerOnAdd}) => {
    inicial = 1
    const [counter, setCounter] = useState(inicial)
  
            
            const sumarContador = () =>
                counter <= stock - 1 ? setCounter(counter + 1) : console.log('No hay stock suficiente')

            
            const restarContador = () => 
                counter > 1 ? setCounter(counter - 1) : console.log ('Debés seleccionar una cantidad')



    return(
        <div id="button-container">

            <div id="button-container-Counter">
                
                <button className="buttonCount" onClick={sumarContador}>
                    <img src="https://icongr.am/octicons/plus.svg?size=47&color=0a91a3" alt="plus" />
                </button>

                <div id="counter" >
                    <p>{counter}</p>
                </div>

                <button className="buttonCount" onClick={restarContador}>
                    <img src="https://icongr.am/octicons/horizontal-rule.svg?size=47&color=0a91a3" alt="rest" />
                </button>

            </div>
            
                <button className="buttonDetail_add" onClick={()=> handlerOnAdd(counter, setCounter)}> Agregar </button>


        </div>
    )
}

export default ItemCount
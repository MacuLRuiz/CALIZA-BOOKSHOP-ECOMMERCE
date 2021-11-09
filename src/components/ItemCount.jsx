import { useState } from "react"
import { Link } from "react-router-dom";




const ItemCount = ({stock, inicial, onAdd}) => {
    inicial = 1
    const [counter, setCounter] = useState(inicial)
    const [cambiarBoton,setCambiarBoton] = useState(false)
            
            const sumarContador = () =>
                counter <= stock - 1 ? setCounter(counter + 1) : console.log('No hay stock suficiente')

            
            const restarContador = () => 
                counter > 1 ? setCounter(counter - 1) : console.log ('Debés seleccionar una cantidad')

    const handlerOnAdd = () => {
        onAdd(counter)
        alert(`agregaste ${counter} productos al carrito`)
        setCounter(inicial)
        setCambiarBoton(true)
    }

    console.log(cambiarBoton)

    return(
        <div id="button-container">

            <div id="button-container-Counter">
                
                <button class="buttonCount" onClick={sumarContador}>
                    <img src="https://icongr.am/octicons/plus.svg?size=47&color=0a91a3" alt="plus" />
                </button>

                <div id="counter" >
                    <p>{counter}</p>
                </div>

                <button class="buttonCount" onClick={restarContador}>
                    <img src="https://icongr.am/octicons/horizontal-rule.svg?size=47&color=0a91a3" alt="rest" />
                </button>

            </div>
            

            <div>   

                {cambiarBoton ? 

                    <Link to="/cart"> 
                        <button class="buttonDetail_add"> Terminar Compra </button>                                     
                    </Link>
                :
                <button class="buttonDetail_add" onClick={handlerOnAdd}> Agregar </button>
                }

            </div>


        </div>
    )
}

export default ItemCount
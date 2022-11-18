import { useEffect, useState } from 'react'

export const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0) // donde, TOTAL es el acumulado y GASTO es la instancia. Es decir, va a ir acumulando el gasto.cantidad en el TOTAL. Por otro lado, 0 sería el valor inicial

        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    } // Esta función permite mostrar por ej 100, en el siguiente formato -> $100.00

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aquí</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

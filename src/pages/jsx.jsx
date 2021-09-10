import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Jsx() {
    const a = 4;
    const b = 3;
    console.log(a * b);

    const obj = {
        nome: 'João',
        idade: 30
    }

    const titulo = <h2>Segundo título</h2>

    function subtitulo() {
        return <h3>{"Muito Legal 2".toUpperCase()}</h3>
    }
    
    return (
        <div>
            <h1>JSX é um conceito Central</h1>
            {titulo}
            <h4>{"muito legal".toUpperCase()}</h4>
            <p>
                {JSON.stringify({obj})}
            </p>
        </div>
    )
}
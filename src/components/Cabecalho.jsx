export default function Cabecalho(props) {
    console.log(props.titulo);
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
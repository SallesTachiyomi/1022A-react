//faça um componente que faça um retângulo da largura da tela
//por 200px

//crie uma variavel com LET no js que contenha o valor "Meu Componente"

//crie uma div no componente que dentro dela mostre um <p>]
//contendo o valor da variável.
import './MeuComponente.css'

function MeuComponente(){
    let variavel = "MeuComponente"
    return
    <div className="minha-div">
        <p>{variavel}</p>
    </div>
}
export default MeuComponente;
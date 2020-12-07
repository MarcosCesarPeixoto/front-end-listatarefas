import React from 'react';
import './App.css';

/*
*    Estilizando a linha da Tarefa
*
*/
const EstiloTarefaDestaque = {
  backgroundColor: '#87CEEB',
  border: 'none',
}

const EstiloTarefaNormal = {
  border: 'none',
}

function Estilo(str) {
  if( (str.toLowerCase().lastIndexOf('estudar') !== -1) || (str.toLowerCase().lastIndexOf('ler') !== -1) ) {
    return EstiloTarefaDestaque
  } else {
    return EstiloTarefaNormal
  }   
}

function LimparElemento(){
  if(document.getElementById("NovaTarefa")) {
    document.getElementById('NovaTarefa').value='';
  }
}

class ListaTarefas extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {tarefas: []};
    this.AdicionarTarefa = this.AdicionarTarefa.bind(this);
  }

  AdicionarTarefa(newTarefa) {
    const tarefas = this.state.tarefas;
    
    if(newTarefa !== ""){
      tarefas.push({descricao: newTarefa});
    }

    this.setState({
      tarefas: tarefas
    });

    LimparElemento();
  }

  RemoverTarefa(index) {
    // Fazendo uma copia da lista de tarefas existente, atribuindo na cons tarefas, usando slice que indica um novo posicionamento de memoria
    const tarefas = this.state.tarefas.slice();
    
    if(index !== ""){
      tarefas.splice(index, 1);
    }

    this.setState({
      tarefas: tarefas
    });
  }

  inputHandler(e) {
    //console.log(this.target.value);
    // ====>>>  Alguma erro que não consegui identificar está deixando o input somente leitura, então esse handle não é realizado
    // esse link menciona a respeito: https://stackoverflow.com/questions/36715901/reactjs-error-warning/36716014 
    // Porém, perdi um tempo enorme e não consegui solucação
    this.setState({
      value: e.target.value
    });
  }

  render(){
    return(
      <div>
          <form>
            <input id="NovaTarefa" class="form-control form-control-sm" type="text" informe uma nova tarefa=".form-control-sm" placeholder="Informe uma nova tarefa"></input> 
            <button type="button" onClick={() => this.AdicionarTarefa(document.getElementById('NovaTarefa').value)}>Adicionar</button>
          </form>
          
          <div>
            {
              this.state.tarefas.map((t, index) => {
                return(
                  // boa prática passar o index na div
                  <div onClick={this.handleClick} key={index}>
                    <div >
                      <input type="checkbox" id="tarefa" name="tarefa"/>
                      <input id="TarefaL" value={t.descricao} type="text" onChange={() => this.inputHandler} style={Estilo(t.descricao)}></input>

                      <button type="button" class="botaoremover" onClick={() => this.RemoverTarefa(index)} >Remover</button>
                    </div>  
                  </div>
                );
              })
            }
          </div>
      </div>
    );
  } 
 
}

function App() {
  return (
    <div>
      <header className="App-header">
        <div>
          <div className="App">
            <h3>Lista de Tarefas</h3>
          </div>

          <ListaTarefas />

        </div>
      </header>
    </div>
  );
}

export default App;

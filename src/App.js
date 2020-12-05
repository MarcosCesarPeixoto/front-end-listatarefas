import React from 'react';
import './App.css';

class ListaTarefas extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {tarefas: []};
    this.AdicionarTarefa = this.AdicionarTarefa.bind(this);
  }

  AdicionarTarefa(newTarefa) {
    let tarefas = this.state.tarefas;
    
    if(newTarefa !== ""){
      tarefas.push({descricao: newTarefa});
    }

    this.setState({
      tarefas: tarefas
    });
  }

  render(){
    return(
      <div>
          <form>
            <input id="NovaTarefa" class="form-control form-control-sm" type="text" informe uma nova tarefa=".form-control-sm" placeholder="Informe uma nova tarefa"></input> 
            <button type="button" onClick={() => this.AdicionarTarefa(document.getElementById('NovaTarefa').value)}>Adicionar</button>
            {document.getElementById('NovaTarefa').value=''}             
          </form>

          <div>
            {
              this.state.tarefas.map(t => {
                return(
                  <div >
                    <input type="checkbox" id="tarefa" name="tarefa" />
                    <label for="tarefa">{t.descricao}</label>
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

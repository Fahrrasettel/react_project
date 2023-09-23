import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
  removerAluno = (index) => {
    const{alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno,i) => {
    return i !== index
    })
  }     
    )
  }
  state = {
    alunos: []
/*{nome: 'dudu teste',
turma: 'programaçao web',
},
{nome: 'paty',
turma: 'analise de algoritmos'
},
{
  nome: 'joaozinho',
  turma: 'programaçao 00'
},
{
  nome:'ju',
  turma: 'engenharia de requisitos',
},
    ]
  }*/
}
render(){
    const {alunos} = this.state
    return (
      <div className="container">
        <h1 className='text-center'>Agenda Semanal</h1>
        <Table alunos = {alunos}
        removerAluno = {this.removerAluno}/>
      </div>
    );
  }  
} 

export default App;
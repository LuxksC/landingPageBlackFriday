//Criação de constantes que fazem referência aos elementos do HTML
//para capturar um elemento do HTML, iremos usar o comando document.querySelector e passar como referência o identificador atribuído a esse elemento
const listContainer = document.querySelector(`[data-lists]`) //div fantasma
const newListForm = document.querySelector(`[data-new-list-form]`)//formulário
const newListInput = document.querySelector(`[data-new-list-input]`)//input

newListForm.addEventListener('submit', function(e){ 
    e.preventDefault()//evita que a página atualize sempre que o botão for acionado. Esse é o padrão do submit
    const emailAdress = newListInput.value //variável que representa o valor inserido no Input
    if (emailAdress === null || emailAdress === '') return // Se o valor do input for nada ou uma string vazia nada irá acontecer
    localStorage.setItem(Date.now().toString(), emailAdress)//função que irá ajuda a popular a lista de objetos usada como referência para os items da ToDoList. Descrição no Readme
    newListInput.value = null // Limpa o input após acionamento do evento
})

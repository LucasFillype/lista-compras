const input = document.getElementById("myInput");
const button = document.getElementById("addButton");
const list = document.getElementById("myList");

function NewElement() {

    const li = document.createElement("li"); // Cria um elemento li
    const inputValue = input.value.trim(); // Pega e limpa espaços do valor do input
    const t = document.createTextNode(inputValue); // Cria nó de texto

    if (inputValue === '') {
        alert("Você precisa digitar algo!");
    } 

    input.value = ""; // Limpa o campo

    //--- Criando os elementos da lista --- //
    const divTarefa = document.createElement("div");//Div principal que vai ter o conteúdo da lista
    divTarefa.classList.add("item-tarefa"); //atribuindo uma classe para estilização em CSS

    //Criando a div para o lado esquerdo da lista
    const divEsquerda = document.createElement('div');
    divEsquerda.classList.add('conteudo-esquerda');

    //Adiciona botão de check
    const checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.classList.add("check-btn");
    

    const label = document.createElement("label");
    label.textContent = inputValue;

    //Adiciona a Lixeira
    const binBtn = document.createElement("button");
    binBtn.classList.add("bin-btn"); //Nós adicionamos uma classe em CSS para estilizar o botão
    binBtn.innerHTML = `<svg width="23" height="24" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M21 12.1667L20.5869 18.8501C20.4813 20.5576 20.4285 21.4114 20.0005 22.0253C19.7889 22.3287 19.5165 22.5849 19.2005 22.7773C18.5614 23.1667 17.706 23.1667 15.9951 23.1667C14.2821 23.1667 13.4255 23.1667 12.786 22.7766C12.4699 22.5838 12.1973 22.3272 11.9858 22.0232C11.5579 21.4084 11.5063 20.5534 11.4031 18.8435L11 12.1667"
        stroke="#6B6671" stroke-linecap="round" />
    <path
        d="M10 12.1667H22M18.7038 12.1667L18.2487 11.2278C17.9464 10.6042 17.7952 10.2924 17.5345 10.0979C17.4767 10.0547 17.4154 10.0164 17.3513 9.98314C17.0626 9.83334 16.7161 9.83334 16.023 9.83334C15.3125 9.83334 14.9573 9.83334 14.6638 9.98942C14.5987 10.024 14.5367 10.0639 14.4782 10.1088C14.2144 10.3111 14.0671 10.6344 13.7724 11.2809L13.3686 12.1667"
        stroke="#6B6671" stroke-linecap="round" />
    <path d="M14.3334 19.5V15.5" stroke="#6B6671" stroke-linecap="round" />
    <path d="M17.6666 19.5V15.5" stroke="#6B6671" stroke-linecap="round" />
        </svg>`


    //--- Estrutuando os elementos e Divs da lista --- //


    //Adicionando elementos à Div esquerda
    divEsquerda.appendChild(checkBtn);
    divEsquerda.appendChild(label);

    //A div "Tarefa" representa a linha inteira da lista, e aqui nós estamos adicionando a Div esquerda e o botão de lixeira para ela
    divTarefa.appendChild(divEsquerda);
    divTarefa.appendChild(binBtn);

    
    li.appendChild(divTarefa);

    list.appendChild(li); // Adiciona o li à lista ul


    
    binBtn.addEventListener("click", function () {
        // Remove o item da lista
        li.remove();

        const warningMessage = document.getElementById("warning-message");
        warningMessage.style.display = "flex"; // Mostra a mensagem

        //remover a mensagem após 3 segundos
        setTimeout(function () {
            warningMessage.style.display = "none";
        }, 3000);
    });




    const xIcon = document.getElementById("x-icon");
    xIcon.addEventListener("click", function () {
        const warningMessage = document.getElementById("warning-message");
        warningMessage.style.display = "none"; // Esconde a mensagem ao clicar no X
    });
}




function showWarningMessage() {
    const binBtn = document.querySelector(".bin-btn");
    const warningMessage = document.getElementById("warning-message");

    binBtn.addEventListener("click", function () {
        warningMessage.style.display = "flex";
    });

}

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita comportamento padrão (como submit)
        NewElement(); // chama a função
    }
});


button.addEventListener("click", NewElement);



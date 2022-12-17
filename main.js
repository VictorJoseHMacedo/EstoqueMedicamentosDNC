var remedios = [];
function addRemedio() { 
    event.preventDefault();
    let remedio = {
        "medicamento": document.getElementById("fmedicamento").value,
        "quantidade": document.getElementById("fquantidade").value,
        "tipo": document.getElementById("ftipo").value,
    }
    document.getElementById("fmedicamento").value ="";
    document.getElementById("fquantidade").value ="";
    document.getElementById("ftipo").value ="";

    remedios.push(remedio);

    renderTable();

    console.log("Estou aqui!!")
}

function renderTable(){

    let table = document.getElementById("dataTable");
    table.innerHTML = ` <tr>
    <th>ID</th>
    <th>MEDICAMENTO</th>
    <th>QUANTIDADE</th>
    <th>CLASSE DE MEDICAMENTO</th>
    <th>REMOVER</th>
</tr> `

for(let i = 0; i< remedios.length; i++)
{
    table.innerHTML = table.innerHTML + `<td> ${ i } </td>
    <td> ${ remedios[i].medicamento}  </td>
    <td> ${ remedios[i].quantidade} </td>
    <td> ${ remedios[i].tipo} </td>
    <td><img src="remove.png" width="25px" height="25px" onclick="removeRemedio(${i})"></td>
    `
}
}

function removeRemedio(index){

    remedios.splice(index,1);
    renderTable();
}
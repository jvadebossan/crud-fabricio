//load ongs from loaclstorage
function onLoad() {
    //get body and div to append ongs
    let body = document.getElementsByTagName('body')[0];
    let divOngs = document.getElementsByClassName('ongs')[0]
    
    //get ongs from localstorage
    const storedData = localStorage.getItem('ongs');
    if (storedData && storedData !== '[]') {
        const data = JSON.parse(storedData);
        //create a div for each ong
        data.forEach(ong => {
            let div = document.createElement('div');
            div.className = 'ong';
            div.innerHTML = `
            <h1>${ong.name}</h1>
            <h2>${ong.desc}</h2>
            <h3>${ong.cnpj}</h3>
            <input class="btn" type="button" value="DELETAR" name="${ong.name}" onclick="deleteOng(name)">
            <input class="btn" type="button" value="EDITAR" name="${ong.name}" onclick="editOng(name)">  
            `;
            divOngs ? divOngs.appendChild(div) : null;
        });
    } 
    //if there is no ong, show an error message
    else {
        let errorMsg = document.createElement('p')
        errorMsg.innerText = 'Nenhuma ONG cadastrada!';
        errorMsg.className = 'error';
        divOngs.appendChild(errorMsg);
    }
    body.innerHTML += '<script src="../scripts/crud.js"></script>'
}

//delete ong
function deleteOng(id){
    //get ongs from localstorage and filter the ong to delete
    let ongs = JSON.parse(localStorage.getItem('ongs'));
    let newOngs = ongs.filter(ong => ong.name !== id);
    localStorage.setItem('ongs', JSON.stringify(newOngs));
    location.reload();
}

//edit ong
function editOng(id){
    //get ongs from localstorage and find the ong to edit
    let ongs = JSON.parse(localStorage.getItem('ongs'));
    let ong = ongs.find(ong => ong.name === id);
    localStorage.setItem('ong', JSON.stringify(ong));
    window.location.href = `../pages/add_ong.html?id=${id}`;
}

onLoad()
//verify if there is a parameter, if not, return
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ongId = urlParams.get('id')

if(ongId) {
    //get data from localstorage and fill inputs
    let ongs = JSON.parse(localStorage.getItem('ongs'));
    let ong = ongs.find(ong => ong.name === ongId);
    document.getElementById('name').value = ong.name;
    document.getElementById('desc').value = ong.desc;
    document.getElementById('cnpj').value = ong.cnpj;

    //set button to edit
    document.getElementById('add').value = 'Editar';
}

function addOng(){
    //if there isnt an id, add a new ong
    if(!ongId) {
        //get data from inputs
        let name = document.getElementById('name').value;
        let desc = document.getElementById('desc').value;
        let cnpj = document.getElementById('cnpj').value;
        
        let ong = {
            name: name,
            desc: desc,
            cnpj: cnpj
        }
        //add to localstorage
        let ongs = JSON.parse(localStorage.getItem('ongs')) || [];
        ongs.push(ong);
        localStorage.setItem('ongs', JSON.stringify(ongs));
    }
    //if there is an id, edit the ong
    else{
        //get data from inputs
        let name = document.getElementById('name').value;
        let desc = document.getElementById('desc').value;
        let cnpj = document.getElementById('cnpj').value;
        
        //get ongs from localstorage and edit the ong
        let ongs = JSON.parse(localStorage.getItem('ongs'));
        let ong = ongs.find(ong => ong.name === ongId);
        ong.name = name;
        ong.desc = desc;
        ong.cnpj = cnpj;
        
        localStorage.setItem('ongs', JSON.stringify(ongs));
    }
}
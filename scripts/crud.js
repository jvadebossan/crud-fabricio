function addOng(){
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
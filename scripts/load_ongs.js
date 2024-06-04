function onLoad(){
    let divOngs = document.getElementsByClassName('ongs')[0]

    fetch('../database.json')
        .then(response => response.json())
        .then(data => {
            const ongs = JSON.stringify(data)
            data = JSON.parse(ongs).ongs
            data.forEach(ong => {
                console.log(ong)
            let div = document.createElement('div')
            div.className = 'ong'
            div.innerHTML = `
                <h1>${ong.name}</h1>
                <h2>${ong.desc}</h2>
                <h3>${ong.cnpj}</h3>
                <input class="btn" type="button" value="DELETAR">
                <input class="btn" type="button" value="EDITAR">
            `
            divOngs.appendChild(div)
            })
        })
}

onLoad()
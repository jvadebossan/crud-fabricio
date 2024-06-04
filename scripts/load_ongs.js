function onLoad() {
    let divOngs = document.getElementsByClassName('ongs')[0]


    const storedData = localStorage.getItem('ongs');
    if (storedData) {
        const data = JSON.parse(storedData);
        data.forEach(ong => {
            let div = document.createElement('div');
            div.className = 'ong';
            div.innerHTML = `
            <h1>${ong.name}</h1>
            <h2>${ong.desc}</h2>
            <h3>${ong.cnpj}</h3>
            <input class="btn" type="button" value="DELETAR">
            <input class="btn" type="button" value="EDITAR">
        `;
            divOngs.appendChild(div);
        });
    } else {
        let errorMsg = document.createElement('p')
        errorMsg.innerText = 'Nenhuma ONG cadastrada!';
        errorMsg.className = 'error';
        divOngs.appendChild(errorMsg);
    }
}

onLoad()
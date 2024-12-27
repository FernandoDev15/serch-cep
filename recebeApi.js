

// fetch('https://viacep.com.br/ws/03375130/json/').then((response) => {
//     response.json().then((data) => console.log(data))
// }).catch((er) => {
//     console.log('cep inváido!', er)
// })

const p = document.createElement('p');
document.body.appendChild(p);

async function obterDadosDoCep() {
    const cep = document.getElementById('cep');


    if (typeof cep.valueAsNumber !== 'number' || cep.textLength !== 8) {

        return p.textContent = 'O cep deve conter 8 números sem hífen'
    } else {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
            const dados = await resposta.json()

            return dados.erro ? p.textContent = 'Cep invaĺido' : p.innerHTML = `<ul>
            <li>Cep: ${dados.cep}</li>
            <li>Rua: ${dados.logradouro}</li>
            <li>Bairro: ${dados.bairro}</li>
            <li>Localidade: ${dados.localidade}</li>
            <li>Estado: ${dados.uf}</li>
            <li>Região: ${dados.regiao}</li>
           </ul>`
        } catch (error) {
            console.log('Valor Invalido!', error);
        } finally {
            cep.value = '';

        }
    }

}

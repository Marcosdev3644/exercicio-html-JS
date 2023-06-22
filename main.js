const form = document.getElementById('campo-numerico');

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const campo1 = document.getElementById('campo1');
    const campo2 = document.getElementById('campo2');
    const mensagemSucesso = `O número foi validado!`
    const mensagemErro = `O número do campo1 precisa ser maior que o campo2!`

    if(campo2.value > campo1.value) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campo1.value = '';
        campo2.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block'
        campo1.style.border = '1px solid red';
    }

})
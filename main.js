
$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira um email válido.',
            telefone: 'Por favor, insira um número válido',
            cep: 'CEP inválido, digite corretamente',
            cpf: 'CPF inválido, digte corretamente',
        },
        submitHnadler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos)[
                alert(`Existem ${camposIncorretos} campos incorretos`)
            ]
        }
    })

})
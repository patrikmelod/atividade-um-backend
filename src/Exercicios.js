const exercicio_um = (numero) => {
    let total = 1;

    for (let cont = numero; cont > 0; cont--) {
        total = total * cont;
    }

    return total;
}

const exercicio_dois = (n, mensagem) => {
    let texto = "";

    for (let cont = 0; cont < n; cont++) {
        texto = texto + mensagem + "\n";
    }

    return texto;
}

const exercicio_tres = (n1, n2, operacao) => {
    switch (operacao) {
        case "soma":
            return n1 + n2;
        case "subtracao":
            return n1 - n2;
        case "multiplicacao":
            return n1 * n2;
        case "divisao":
            if (n2 == 0) {
                return null;
            } else {
                return n1 / n2;
            }
        default:
            return null;
    }
}

const exercicio_quatro = (valor) => {
    let tabuada = []

    for (let cont = 0; cont <= 10; cont++) {
        tabuada.push(valor * cont)
    }

    return tabuada;
}

const exercicio_cinco = (numero) => {
    const digitos = String(numero).split('');
    let invertido = "";

    for (let cont = digitos.length - 1; cont >= 0; cont--) {
        invertido = invertido + digitos[cont];
    }

    return parseInt(invertido);
}

const exercicio_seis = (palavra) => {
    let contador = 0;

    for (let cont = 0; cont < palavra.length; cont++) {
        if ("aeiouAEIOU".includes(palavra[cont])) {
            contador++;
        }
    }

    return contador;
}

const exercicio_sete = (sequencia) => {
    let contParAberto = 0
    let contParFechado = 0
    let contColcAberto = 0;
    let contColcFechado = 0;
    let contChavAberto = 0;
    let contChavFechado = 0;

    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] == '(') {
            contParAberto++;
        } else if (sequencia[i] == ')') {
            contParFechado++;
        } else if (sequencia[i] == '[') {
            contColcAberto++;
        } else if (sequencia[i] == ']') {
            contColcFechado++;
        } else if (sequencia[i] == '{') {
            contChavAberto++;
        } else if (sequencia[i] == '}') {
            contChavFechado++;
        }
    }

    if (contParAberto == contParFechado && contColcAberto == contColcFechado && contChavAberto == contChavFechado) {
        return true;
    } else {
        return false;
    }
}

const exercicio_oito = (tamanho) => {
    let lista = []

    const nomes = [
        "Ana",
        "Lucas",
        "Maria",
        "José",
        "Fernanda",
        "Pedro",
        "Juliana",
        "Rafael",
        "Carla",
        "Gustavo",
        "Tatiane",
        "Felipe",
        "Camila",
        "Thiago",
        "Renata"
    ];

    for (let i = 0; i < tamanho; i++) {
        let objeto = {
            id: i + 1,
            nome: nomes[Math.floor((Math.random() * 15))],
            idade: Math.floor((Math.random() * 91))
        }

        if (objeto.idade < 18) {
            objeto.idade = 18;
        }

        lista.push(objeto);
    }

    return lista;
}

const exercicio_nove = (objetos) => {
    let soma = 0;
    for (let i = 0; i < objetos.length; i++) {
        soma = soma + objetos[i].idade;
    }

    return soma / objetos.length;
}

const exercicio_dez = (objetos, atributo) => {
    if (atributo == "nome") {
        objetos.sort((a, b) => {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
            return 0;
        });
    } else {
        objetos.sort((a, b) => a[atributo] - b[atributo])
    }
    return objetos;
}


export { exercicio_um, exercicio_dois, exercicio_tres, exercicio_quatro, exercicio_cinco, exercicio_seis, exercicio_sete, exercicio_oito, exercicio_nove, exercicio_dez }
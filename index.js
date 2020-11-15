class Saludo
{
    saludo (persona)
    {
        const name = 'world';
        console.log(`Hello ${name} from ${persona}`);
    }
}

let saludador = new Saludo ();
saludador.saludo('SLM');
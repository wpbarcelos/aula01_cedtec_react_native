//Exercícios TypeScript
//Adicione os tipos em cada item usando interface quando necessário.
//1. Objetos

interface Aluno {
  nome: string;
  idade: number;
  matriculado: boolean;
}

const aluno: Aluno = {
  nome: "Maria",
  idade: 22,
  matriculado: true,
};

interface Carro {
  marca: string;
  ano: number;
  preco: number;
}
const carro: Carro = {
  marca: "Toyota",
  ano: 2020,
  preco: 85000.9,
};

interface Config {
  tema: string;
  notificacoes: boolean;
  volume: number;
}
const config: Config = {
  tema: "escuro",
  notificacoes: true, //true ou false
  volume: 80,
};
//2. Funções

function somar(a: number, b: number): number {
  return a + b;
}
function saudacao(nome: string): string {
  return "Olá, " + nome;
}
function ehMaior(idade: number): boolean {
  return idade >= 18; // verdadeiro ou falso true | false
}
function aplicarDesconto(preco: number, percentual: number): number {
  return preco - (preco * percentual) / 100;
}
//3. Arrays

const nomes: string[] = ["Ana", "Pedro", "Lucas", "123"];
const idades: number[] = [18, 25, 30];

interface Produto {
  nome: string;
  preco: number;
}
const produtos: Produto[] = [
  { nome: "Teclado", preco: 150 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 100 },
];
//4. Função com callback

interface CallbackInterface {
  (valor: number, valor2: number): number;
}

function processar(valor: number, valor2: number, callback: CallbackInterface) {
  return callback(valor, valor2);
}

//
processar(100, 10, aplicarDesconto);
processar(10, 10, somar);

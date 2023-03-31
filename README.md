# Projeto Orc'cine

## Como rodar o projeto

1.  Instale o Nodejs e o Git no seu computador;

2.  Clone o repositório com o comando:

```bash
git clone https://github.com/EhOBruno/Orc-cine
```

3. Crie uma conta no site https://www.themoviedb.org/ ;

4. Vá em configurações e gere sua chave na parte chamada "API";

5. No repositório, crie um arquivo na pasta "src" chamado "key.js" com o seguinte código:

```bash
export const APIkey = 'sua-chave'
```
obs: coloque a chave em formato de string

6. No terminal, execute seguinte comando:

```bash
npm install
```

7. Por último, execute o comando a seguir:

```bash
npm start
```
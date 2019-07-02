# Login em projeto Node com Express e Sequelize
Projeto criado visando facilitar acesso à template com login funcional utilizando Node e banco de dados MySql.

Para tal foram utilizados os pacotes:
```
- "crypto": "^1.0.1"
- "dotenv-safe": "^6.1.0"
- "jsonwebtoken": "^8.5.1"
```

## Passo a passo para executar projeto

1. Clona projeto local <br />
```git clone https://github.com/JardelFelp/node-express-login.git```

2. Instalar dependências <br />
```yarn install``` ou ```npm install```

3. Ajustar credenciais do banco de dados no arquivo `config.js`

4. Executar projeto <br />
```yarn run dev``` ou ```npm run dev```

## Funcionamento
### Cadastro de usuário
![Cadastro de usuário](https://i.imgur.com/j4MXcwk.png)

### Login Sucesso
![Login Sucesso](https://i.imgur.com/LOgwPQM.png)

### Falha no Login
![Falha no Login](https://i.imgur.com/BKeuoIO.png)

### Consulta Enviando Token Correto
![Consulta Enviando Token Correto](https://i.imgur.com/M9qMgyy.png)

### Consulta Enviando Token Incorreto
![Consulta Enviando Token Incorreto](https://i.imgur.com/VfMEQU9.png)

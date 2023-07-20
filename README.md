<h1 align="center">
    <img src="/.github/assets/logo.svg"
    width="150px"
    alt="Logo" />
</h1>

<h3 align="center">
  Skedle.me UI
</h3>

<p align="center">
  :open_book: Design System do projeto Skedle.me.
  <a href="https://prismapro.github.io/skedle.me-ui/">Clique aqui</a> para acessar.  
</p>

<p align="center">
  <a href="#fire-instalação-e-execução">Instalação e execução</a>   |   <a href="#hash-versionamento-e-compilação">Versionamento e compilação</a>   |   <a href="#memo-licença">Licença</a>
</p>

## :wrench: Instalação e Execução

Abrir terminal:

```sh
# Clone este repositório
git clone https://github.com/prismapro/skedle.me-ui

# Entre na pasta
cd skedle.me-ui

# Instale as dependências
npm install

# Inicie o aplicativo
npm run dev

```

## :hash: Versionamento e Compilação

Depois de realizar as alterações, execute o comando abaixo para adicionar os pacotes que foram alterados para gerar uma nova versão:

```sh
npm run changeset
```

Siga os passos e finalize o processo, lembrando de alterar o tipo da versão:

- Mudanças que quebram a compatibilidade com versões anteriores são consideradas `major` (2.0.0).

- Novos recursos compatíveis com versões anteriores são considerados `minor` (1.1.0).

- Correções de bugs compatíveis com versões anteriores são consideradas `patch` (1.0.1).

Execute o comando para criar os changelogs e alterar a versão nos pacotes:

```sh
npm run version-packages
```

Termine o procedimento fazendo um pull request com o nome do recurso, subindo para o GitHub e aprovando-o.

## :memo: Licença

Este projeto está sob licença MIT. Veja [LICENÇA](/LICENSE) para mais informações.

---

<p align="center">
Desenvolvido por <a href="https://github.com/prismapro">PrismaPro Labs</a>
</p>

# Perfil profissional — GitHub Pages

Este projeto é um site estático de perfil profissional, desenvolvido para demonstrar o uso do GitHub em sala de aula e a publicação gratuita de páginas web com o GitHub Pages.

O conteúdo apresenta informações profissionais, experiências, formação, certificações, cursos e links de contato. A página foi construída somente com HTML, CSS e JavaScript, sem dependências ou frameworks.

## Objetivos didáticos

- Apresentar os conceitos básicos de um repositório Git.
- Demonstrar criação de commits e acompanhamento do histórico de alterações.
- Praticar o envio de código para um repositório no GitHub.
- Trabalhar com HTML semântico, CSS responsivo e JavaScript.
- Publicar e hospedar um site estático utilizando o GitHub Pages.

## Estrutura do projeto

```text
perfil_prof/
├── index.html          # Estrutura e conteúdo da página
├── css/
│   └── estilo.css      # Estilos e regras de responsividade
├── js/
│   └── script.js       # Comportamentos da página
├── imagens/            # Imagens e arquivos visuais locais
└── README.md           # Documentação do projeto
```

## Executar localmente

Como o projeto é estático, basta baixar ou clonar o repositório e abrir o arquivo `index.html` em um navegador.

```bash
git clone git@github.com:ffelipeao/perfil_prof.git
cd perfil_prof
```

Para executar com um servidor local, também é possível usar:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

## Publicar com GitHub Pages

1. Envie os arquivos para um repositório no GitHub.
2. Abra a página do repositório e acesse **Settings**.
3. No menu lateral, selecione **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, mantenha a pasta `/ (root)` e clique em **Save**.
6. Aguarde a publicação. O endereço do site será informado na própria seção **Pages**.

Para este repositório, o endereço esperado é:

```text
https://ffelipeao.github.io/perfil_prof/
```

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git e GitHub
- GitHub Pages

## Autor

Felipe Alves de Oliveira

- [GitHub](https://github.com/ffelipeao/)
- [LinkedIn](https://www.linkedin.com/in/ffelipeao)
- [Instagram](https://www.instagram.com/ffelipeao)

## Finalidade

Projeto criado para fins educacionais e para demonstração prática do fluxo de versionamento, colaboração e hospedagem de sites estáticos no GitHub.

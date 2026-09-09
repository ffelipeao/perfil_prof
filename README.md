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

## Personalizar o perfil

Depois de clonar o projeto, abra o arquivo `index.html` em um editor de código e substitua os dados de exemplo pelos seus dados pessoais:

- nome, apresentação e localização;
- foto de perfil;
- experiências profissionais e formação acadêmica;
- habilidades, certificações e cursos;
- links para LinkedIn, GitHub, Instagram ou outras redes.

As cores, os tamanhos, os espaçamentos e o comportamento responsivo podem ser alterados em `css/estilo.css`. Os comportamentos da página ficam em `js/script.js`.

Antes de publicar, abra o site no navegador e confira se os textos, links e a foto estão corretos. Não inclua senhas, documentos pessoais, tokens ou outras informações sigilosas no projeto.

## Enviar para seu próprio repositório

### 1. Criar o repositório no GitHub

Entre em sua conta do GitHub e crie um repositório público. Para evitar conflitos no primeiro envio, não marque as opções para adicionar README, `.gitignore` ou licença.

### 2. Alterar o repositório remoto

O projeto clonado ainda aponta para o repositório original. Dentro da pasta do projeto, confira o endereço atual:

```bash
git remote -v
```

Substitua o endereço pelo repositório que você criou. Troque `SEU_USUARIO` e `SEU_REPOSITORIO` pelos valores da sua conta:

```bash
git remote set-url origin git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git
git remote -v
```

Se você utiliza HTTPS em vez de SSH, use:

```bash
git remote set-url origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### 3. Registrar e enviar as alterações

```bash
git add .
git commit -m "Personaliza perfil profissional"
git branch -M main
git push -u origin main
```

Nos próximos envios, basta repetir o ciclo básico:

```bash
git add .
git commit -m "Descreva a alteração realizada"
git push
```

## Configurar o GitHub Pages

Depois que o código estiver no seu repositório:

1. Abra o repositório no GitHub.
2. Acesse **Settings**.
3. No menu lateral, na área **Code and automation**, selecione **Pages**.
4. Em **Build and deployment**, altere **Source** para **Deploy from a branch**.
5. Em **Branch**, selecione `main`.
6. Selecione a pasta `/ (root)` e clique em **Save**.
7. Aguarde a publicação e clique em **Visit site** quando o endereço aparecer.

O endereço seguirá este formato:

```text
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/
```

Para este repositório, o endereço esperado é:

```text
https://ffelipeao.github.io/perfil_prof/
```

Cada novo `git push` para a branch `main` publicará as alterações automaticamente. A primeira publicação e as atualizações podem levar alguns minutos para aparecer.

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

# Caramello App

Interface web e mobile para o sistema pessoal de organização familiar Caramello.

## Sobre

Este repositório contém a interface construída em **React** e **Ionic** para o projeto Caramello. A aplicação é híbrida — roda no navegador e pode ser empacotada como app nativo para Android e iOS via Capacitor.

## Funcionalidades

- **Autenticação**: Login de usuários.
- **Home**: Visão geral (Dashboard).
- _Em construção..._

## Tecnologias

- **React** (v18+): lógica de aplicação, estado e rotas.
- **Ionic Framework** (v7+): componentes de UI com Adaptive Styling (Material Design / iOS).
- **TypeScript**: linguagem principal.
- **Capacitor**: empacotamento nativo para Android e iOS.
- **Vite**: build tool.
- **Axios**: cliente HTTP.

## Estrutura do Projeto

- `src/pages/` - telas principais da aplicação.
- `src/components/` - componentes reutilizáveis.
- `src/services/` - camada de comunicação com a API (toda chamada HTTP passa por aqui).
- `src/theme/` - variáveis globais de estilo.
- `docs/` - documentação técnica do projeto.

## Desenvolvimento

Para configurar o ambiente e rodar a aplicação localmente, consulte [`docs/dev.md`](./docs/dev.md).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

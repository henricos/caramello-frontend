# Contrato de Desenvolvimento e Estilo (Agent Guidelines)

Este documento define as regras estritas para o desenvolvimento do **Caramello Frontend** por agentes de IA.

## Identidade do Agente
Você é o **Co-piloto de Frontend Sênior**. Sua tarefa é implementar o que é solicitado, aderindo estritamente a estas regras, focando em qualidade, manutenibilidade e consistência.

## Diretrizes de Idioma
O projeto adota uma estratégia de dois idiomas para equilibrar a clareza para o público-alvo e a conformidade com as práticas globais de desenvolvimento de software.

### Inglês (English)
Utilizado para toda a base de código e artefatos diretamente ligados a ela. O objetivo é manter a consistência com as ferramentas, bibliotecas e o ecossistema de programação.

*   **Código-Fonte:** Nomes de arquivos, diretórios, variáveis, funções e classes.
*   **Comentários e Docstrings:** Devem estar no mesmo idioma do código para evitar inconsistências.

### Português do Brasil (pt-BR)
Utilizado para toda a comunicação e documentação voltada para humanos. O objetivo é garantir que o projeto seja acessível e claro para a equipe e os usuários brasileiros.

*   **Documentação Geral:** Conteúdo da pasta `docs/`, `README.md`, etc.
*   **Mensagens de Commit:** Devem seguir o padrão em português.
*   **Pull Requests:** Títulos e descrições.
*   **Textos para o Usuário Final:** Mensagens de erro, interfaces e qualquer texto exibido na aplicação.

## Regra de Ouro (Design System)
Use **APENAS** os componentes de UI fornecidos pelo `@ionic/react`. O design é **Material Design** no Android e **iOS** no iPhone, garantido pelo *Adaptive Styling* do Ionic.
*   Não reinvente a roda: use `<IonCard>`, `<IonItem>`, `<IonList>`, `<IonButton>`, etc.

## Regra de Estilização
Evite ao máximo CSS customizado.
*   Priorize classes utilitárias do Ionic (`ion-padding`, `ion-text-center`, `ion-margin-top`).
*   Se for estritamente necessário CSS customizado, crie-o no arquivo local do componente ou use classes globais em `variables.css`.

## Linguagem & Framework
*   O código deve ser estritamente em **TypeScript (TSX)**.
*   Use **Componentes Funcionais** e `Hooks` do React (`useState`, `useEffect`, `useContext`).
*   Evite Class Components.

## API & Dados
*   Todas as chamadas HTTP devem ser centralizadas em serviços dentro de `src/services/`.
*   Use a biblioteca `axios`.
*   Nunca faça chamadas `fetch` ou `axios` diretamente dentro de um componente de UI; delegue para o serviço.

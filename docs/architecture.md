# Arquitetura do Projeto

O Caramello App segue uma arquitetura baseada em componentes, típica de projetos React, mas adaptada para o modelo híbrido do Ionic.

## Visão Geral

*   **Framework de UI:** Ionic (v7+). Fornece a camada visual que emula nativamente iOS e Android.
*   **Lógica de Aplicação:** React (v18+). Gerencia o estado, rotas e lógica de negócios.
*   **Build Nativo:** Capacitor. Empacota a aplicação web (`dist/`) em um container nativo para Android e iOS.

## Separação de Preocupações

*   **`src/pages`**: Contém as telas principais da aplicação. Cada página deve ser envolta em um `<IonPage>`.
*   **`src/components`**: Componentes menores e reutilizáveis (ex: um card de tarefa específico).
*   **`src/services`**: Camada de isolamento para chamadas de API. Os componentes de UI não devem saber detalhes de URLs ou endpoints.

## Fluxo de Dados

1.  Usuário interage com a UI (Componente).
2.  Componente chama um método do Serviço de API.
3.  Serviço faz a requisição HTTP (Axios) para o Backend Python.
4.  Serviço retorna dados (Tipados) para o Componente.
5.  Componente atualiza o estado (`useState`) e renderiza a nova UI.

# Estilo de Código (Code Style)

Este documento descreve as convenções de código para o projeto Caramello App.

## Nomenclatura

*   **Componentes:** PascalCase. Ex: `LoginPage.tsx`, `UserProfile.tsx`.
*   **Funções e Variáveis:** camelCase. Ex: `getUserInfo()`, `isLoggedIn`.
*   **Interfaces e Tipos:** PascalCase. Ex: `User`, `AuthResponse`.

## Estrutura de Componente

Utilize componentes funcionais com definição de tipo `React.FC` (opcional, mas preferível para props explícitas) ou inferência direta.

```tsx
import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* Conteúdo */}
      </IonContent>
    </IonPage>
  );
};

export default MyComponent;
```

## Imports

Mantenha os imports organizados:
1.  React e bibliotecas core.
2.  Ionic Framework.
3.  Serviços e utilitários.
4.  Componentes locais e estilos.

```tsx
import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';
import ApiService from '../services/ApiService';
import './MyComponent.css';
```

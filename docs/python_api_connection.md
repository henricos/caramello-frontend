# Conexão com API Python (Backend)

O Frontend se comunica com o Backend Python (FastAPI/Flask/Django) via API REST.

## Configuração

A URL base da API deve ser configurável.
*   **Desenvolvimento:** Geralmente `http://localhost:8000` ou, se rodando no Android Emulator, `http://10.0.2.2:8000`.
*   **Produção:** URL do servidor de produção.

## Padrão de Serviço (`ApiService`)

Todo acesso à rede deve passar pelo `ApiService`.

### Exemplo de Uso

```typescript
// Componente
const [status, setStatus] = useState('');

useEffect(() => {
  ApiService.fetchStatus().then(data => setStatus(data));
}, []);
```

### Bibliotecas

Utilizamos `axios` para todas as requisições HTTP devido à sua facilidade de uso com interceptors e tratamento de erros.

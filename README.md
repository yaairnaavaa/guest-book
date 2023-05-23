# Contrato de Libro de Visitas

El contrato inteligente almacena mensajes de los usuarios. Los mensajes pueden ser `premium` si el usuario adjunta suficiente dinero (0.1 $NEAR).

# Inicio Rápido

1. Asegúrese de haber instalado [node.js](https://nodejs.org/en/download/package-manager/) >= 16.
2. Instalar [`NEAR CLI`](https://github.com/near/near-cli#setup)

<br />

## 1. Compilar y Desplegar el contrato
Puedes compilar y desplegar automáticamente el contrato en NEAR testnet/mainnet ejecutando:

```bash
npm run deploy-testnet
```

```bash
npm run deploy-mainnet
```

<br />

## 2. Recuperar mensajes guardados

```bash
near view <contract-account> get_messages '{"from_index":0, "limit":10}'
```

<br />

## 3. Agregar nuevo mensaje

```bash
near call <contract-account> add_message '{"text": "a message"}' --accountId <account>
```

```bash
near call <contract-account> add_message '{"text": "a message"}' --amount 0.1 --accountId <account>
```
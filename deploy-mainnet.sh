#!/bin/sh

# build the contract
npm run build

# deploy the contract
echo Ingrese la cuenta:
read account
NEAR_ENV=mainnet near deploy owaguestbook.testnet --wasmFile build/contract.wasm;
# 🛒 Cypress E2E - Flujo de Compra en Demoblaze

Este proyecto implementa pruebas **end-to-end (E2E)** en **Cypress** para validar el flujo de compra en [Demoblaze](https://www.demoblaze.com). 

## 📌 Características
- Agregar productos al carrito
- Visualizar el carrito
- Completar el formulario de compra
- Finalizar la compra exitosamente

---
## - Instalar dependencias:
- npm install

## Para ejecutar las pruebas desde la interfaz gráfica
- npx cypress open

## Ejecutar en un navegador específic
- npx cypress run --browser chrome

## Estructura del Proyect

cypress-e2e-demoblaze/
│── cypress/
│   ├── integration/
│   │   ├── logicaejecucion.cy.js  # Prueba E2E del flujo de compra
│   │   ├── definicionSelectores.cy.js  # Definicion de selectores
│── cypress.json                  # Configuración de Cypress
│── package.json                   # Dependencias del proyecto
│── README.md                      # Documentación

## Dependencia para Generar reportes
- npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

## Generar reportes
- npx cypress run --reporter mochawesome
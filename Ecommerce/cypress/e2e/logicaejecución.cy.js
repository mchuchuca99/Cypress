import {
  categoria,
  producto,
  ValidarProductoXNombre,
  BotonAgregarProducto,
  CarritoPorduto,
  Home,
  PagarOrden,
} from "../e2e/definicionSelectores.cy";
require("cypress-xpath");

describe("Compra de un producto en DEMOBLAZE", () => {
  it("Debe buscar un producto, agregarlo al carrito y verificarlo", () => {
    cy.visit("https://www.demoblaze.com/");

    //Funcion para agregar un producto al carrito
    const agregarProductocarrito = (
      cagoriaIndex,
      productoIndex,
      resultadoEsperadoProducto
    ) => {
      //Seleccionamos una categoria de producto
      cy.xpath(categoria(cagoriaIndex)).click();
      //Seleccionamos un producto de la categoria
      cy.xpath(producto(productoIndex)).click();
      //Agregamos el producto al carrito
      cy.xpath(BotonAgregarProducto).should("exist").click();
      //Pasamos la alerta
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Product added");
      });
      //Vemos que el carrito muestra el producto agrega
      cy.xpath(CarritoPorduto).click().wait(2000);
      //Volvemos al inicio para agregar otro producto
      cy.xpath(Home).click();
    };

    //Agregamos el primer producto
    agregarProductocarrito(1, 2, "Samsung galaxy s6");
    //Agregamos el segundo producto
    agregarProductocarrito(4, 2, "ASUS Full HD");

    //Realizamos el Pago
    cy.xpath(CarritoPorduto).click();
    cy.xpath(PagarOrden).click();

    //Completar el formulario de la compra.
    cy.get("#name").type("Juan{enter}").wait(3000);
    cy.get("#country").type("Ecuador{enter}").wait(3000);
    cy.get("#city").type("Quito{enter}").wait(3000);
    cy.get("#card").type("1234567890124552{enter}").wait(3000);
    cy.get("#month").type("Mayo{enter}").wait(3000);
    cy.get("#year").type("2025{enter}").wait(3000);
    //Finalizar la compra
    cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]')
      .click()
      .wait(3000);
    cy.xpath("/html/body/div[10]/div[7]/div/button").click();
  });
});

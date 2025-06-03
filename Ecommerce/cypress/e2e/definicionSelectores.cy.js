//Definicion de selectores
export const categoria = (index) => `//div[@class="col-lg-3"]//a[${index}]`;
export const producto = (index) =>
  `//div[@id="tbodyid"]//div[${index}]//div[1]//a[1]//img[1]`;
export const ValidarProductoXNombre = (index) =>
  `//tbody[@id="tbodyid"]//tr[${index}]//td[2]`;
export const BotonAgregarProducto = '//a[normalize-space()="Add to cart"]';
export const CarritoPorduto = '//a[normalize-space()="Cart"]';
export const Home = '//div[@id="navbarExample"]//ul[1]//li[1]';
export const PagarOrden = '//button[@class="btn btn-success"]';

import {
    apiUrl,
    username,
    password
} from '../e2e/constantes.cy'

it('Crear un nuevo usuario en signup', () => {
    cy.api({
        method: 'POST',
        url: `${apiUrl}/signup`,
        body: {
            username: username,
            password: password
        },
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        expect(response.status).to.eq(200);
    });
});
it('Intentar crear un usuario ya existente', () => {
    cy.api({
        method: 'POST',
        url: `${apiUrl}/signup`,
        body: {
            username: username, // El mismo usuario de la prueba anterior
            password: password
        },
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('errorMessage');
        expect(response.body.errorMessage).to.eq('El nombre de usuario ya existe');
    });
});
it('Usuario y password correcto en login', () => {
    cy.api({
        method: 'POST',
        url: `${apiUrl}/login`,
        body: {
            username: username,
            password: password
        },
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        expect(response.status).to.eq(200);        
    });
});
it('Usuario y password incorrecto en login', () => {
    cy.api({
        method: 'POST',
        url: `${apiUrl}/login`,
        body: {
            username: 'usuario_inexistente',
            password: 'claveIncorrecta'
        },
        failOnStatusCode: false,
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('errorMessage');
        expect(response.body.errorMessage).to.eq('Nombre de usuario o clave incorrecta');
    });
});

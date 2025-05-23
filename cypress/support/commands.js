Cypress.Commands.add('cargar_parametros', () => {
    cy.log('Ejecutando comando: cargar_parametros');

    const credenciales = {
        username: 'Naim Murad', // Reemplaza con el usuario deseado
        password: '1234'
    };

    cy.visit('https://web-elprincipecombos.dev2.macamedia.com.ar/#/login');
    cy.wait(1000);
    cy.get('[placeholder="Usuario"]').type(credenciales.username);
    cy.get('[placeholder="Contraseña"]').type(credenciales.password);
    cy.wait(1000);
    cy.get('button[type="button"]:contains("Ingresar")').click();

    cy.log('Comando: cargar_parametros completado');
});
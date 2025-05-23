let localStorageBackup = {};

before(() => {
    cy.cargar_parametros();
    cy.wait(2000); // Esperar a que se cargue la sesión
    cy.window().then((win) => {
        localStorageBackup = { ...win.localStorage };
    });
});

beforeEach(() => {
    cy.visit('https://web-elprincipecombos.dev2.macamedia.com.ar/#/ventas');
    cy.window().then((win) => {
        Object.entries(localStorageBackup).forEach(([key, value]) => {
            win.localStorage.setItem(key, value);
        });
    });
});

describe('Realizar una Venta de Mostrador', () => {
    it('Seleccionar Ventas y realizar una venta', () => {
        cy.wait(1000); // Esperar a que la página cargue completamente antes de interactuar con los elementos
        cy.get('i.eva-plus-outline').click();
        cy.wait(1000);
        cy.get('label.q-field--focused i').click();
        cy.wait(1000);
        cy.get('div.q-manual-focusable--focused span').click();
        cy.wait(1000);
        cy.contains('span', ' Siguiente ').click();
        cy.wait(1000);
        cy.get('label[for="select-producto"] i').click();
        cy.wait(1000);
        cy.get('div[role="option"] div').eq(4).click();
        cy.wait(1000);
        cy.get('button[id="btn-agregar"] i').click();
        cy.wait(1000);
        cy.contains('span', ' Siguiente ').click();
        cy.wait(1000);
        cy.get('label[for="select-pago"] i').click();
        cy.wait(1000);
        cy.get('div[role="option"] div').eq(2).click();
        cy.wait(1000);
        cy.get('input#btn-agregar-pago').click();
        cy.wait(1000);
        cy.get('input#btn-agregar-pago').type('20000');
        cy.wait(1000);
        cy.get('button.q-mt-xs i').click();
        cy.wait(1000);
        cy.contains('span', ' Finalizar ').click();
    });        
});
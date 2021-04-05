/* eslint-disable no-undef */
/// <reference types="cypress" />

import { before } from 'mocha';

class SendMessage {
  constructor(cy) {
    this.cy = cy;
    cy.visit('');

    this.defaultTestValues = { name: 'bruno', email: 'bruno@test.cy', message: 'bruno test cy' };
  }

  clickButtonThatOpensFormModal() {
    this.cy.get('button[id=floatButtonMessage]').click();
  }

  getSubmitFormButton() {
    return this.cy.get('#formCadastro button[type=submit]');
  }

  fillTheForm() {
    this.cy.get('#formCadastro input[name=name]').type(this.defaultTestValues.name);
    this.cy.get('#formCadastro input[name=email]').type(this.defaultTestValues.email);
    this.cy.get('#formCadastro input[name=message]').type(this.defaultTestValues.message);
  }
}

describe('Send a message', () => {
  let sendMessage;
  before(() => {
    sendMessage = new SendMessage(cy);
    cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message').as('messageSent');
  });

  describe('click the button to start', () => {
    sendMessage.clickButtonThatOpensFormModal();

    it('should have the submit button disabled', () => {
      sendMessage.getSubmitFormButton().should('be.disabled');
    });
  });

  describe('fill the form ', () => {
    sendMessage.fillTheForm();

    it('should have the submit button enabled after the form is filled', () => {
      sendMessage.getSubmitFormButton().should('not.be.disabled');
    });
  });

  describe('submit the form ', () => {
    sendMessage.getSubmitFormButton().click();

    it('should have the submit button disabled after submiting', () => {
      sendMessage.getSubmitFormButton().should('be.disabled');
    });

    it('should have an API response that mirrors the submit values', () => {
      cy.wait('@messageSent').then((interceptor) => {
        expect(JSON.stringify(interceptor.response.body))
          .equal(JSON.stringify(sendMessage.defaultTestValues));
      });
    });
  });
});

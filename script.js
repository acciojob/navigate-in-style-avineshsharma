//your JS code here. If required.
cy.get(".container", { timeout: 10000 }).should("exist").and("be.visible");

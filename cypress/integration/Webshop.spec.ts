describe("Webshop list test", () => {
    it("it should add item in cart", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".buy-button:first").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);
    });
    it("it should remove item in cart", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".buy-button:first").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);

        cy.get(".fa-trash-o").click();

        cy.get(".cartItem").should("have.length", 0);
    });
    it("should go to right productinfo", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".game-div:first").click();

        cy.get("h3:first").should("have.text", "Monopol");
    });
    it("should get to productinfo and add to cart", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".game-div:first").click();

        cy.get("button").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);
    });
    it("click on boardgames category", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get("#catBoard").click();

        cy.get(".gameWrapper").should("have.length", 4);
    });
    it("click on card category", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get("#catCard").click();

        cy.get(".gameWrapper").should("have.length", 2);
    });
    it("click on family category", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get("#catFamily").click();

        cy.get(".gameWrapper").should("have.length", 7);
    });
    it("click on all games and go to checkout", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get("#prodCart").click();

        cy.get(".fa-trash-o").click();

        cy.get("#catAll").click();

        cy.get(".buy-button:first").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);

        cy.get("#checkoutButton").click();

        cy.get("#valueAmount1").should("have.value", 1);
    });
    it("should sort price low to high", () => {
        cy.visit("http://localhost:1234");
    
        cy.get("#continueButton").click();
    
        cy.get("#dropdownButton").click();
    
        cy.get("#sortCheap").click();
    
        cy.get(".price:first").should("have.text", "49:-");
    
    });
    it("should sort price high to low", () => {
        cy.visit("http://localhost:1234");
    
        cy.get("#continueButton").click();
    
        cy.get("#dropdownButton").click();
    
        cy.get("#sortExp").click();
    
        cy.get(".price:first").should("have.text", "349:-");
    
    });
});

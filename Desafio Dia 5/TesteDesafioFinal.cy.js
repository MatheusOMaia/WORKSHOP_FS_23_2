describe('Tela de Login',()=>{

    it('Inserir dados do "standard_user" válidos',() =>{
        
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Inserir dados do "locked_out_user" válidos',() =>{
        
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
    it('Inserir dados do "problem_user" válidos',() =>{
        
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

        it('Inserir dados do "performance_glitch_user" válidos',() =>{
        
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })



    it('Inserir "locked_out_user" válido e senha inválida',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq','https://www.saucedemo.com/')
    })

    it('Inserir usuário inválido e senha válida',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('lockedi_out_user')
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq','https://www.saucedemo.com/')
    })

    it('Inserir apenas senha válida',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="password"]').type('secret_suce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Username is required')
        cy.url().should('eq','https://www.saucedemo.com/')
    })

    it('Inserir apenas usuário válida',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Password is required')
        cy.url().should('eq','https://www.saucedemo.com/')
    })

    it('Clicar no login sem utilizar os outros campos',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('contain.text','Epic sadface: Username is required')
        cy.url().should('eq','https://www.saucedemo.com/')
    })


})
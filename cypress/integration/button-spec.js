describe('Buy Now Button', () => {
  it('sees "Featured Product" collection', () => {
    cy.get('#shopify-section-collection')
  })

  it('checks button styling', () => {
    cy.get('.grid-view-item__cta').as('btn').should(($btn) => {
      expect($btn).to.have.css('position', 'absolute')
        .and.to.have.css('text-transform', 'uppercase')
    })

    cy.get('@btn').then(($btn) => {
      if ($btn.hasClass('base')) {
        expect($btn).to.have.css('background-color', 'rgb(0, 0, 0)')
          .and.to.have.css('border', '0')
          .and.to.have.css('color', 'rgb(255, 255, 255)')
          .and.to.have.css('padding', '7.5px')
          .and.to.have.css('width', '50%')
      } else if ($btn.hasClass('snazzy')) {
        expect($btn).to.have.css('background-color', 'rgba(0, 0, 0, 0)')
          .and.to.have.css('border', '3px solid rgb(255, 255, 255)')
          .and.to.have.css('box-shadow', 'rgb(0, 0, 0) 1px 1px 1px 0px, rgb(0, 0, 0) 1px 1px 1px 0px inset')
          .and.to.have.css('color', 'rgb(255, 255, 255)')
          .and.to.have.css('font-weight', '600')
          .and.to.have.css('padding', '15px')
          .and.to.have.css('text-shadow', 'rgb(0, 0, 0) 2px 1px 1px, rgb(0, 0, 0) 1px 2px 1px')
      }
    })
  })

  it('ensures buttons are not visible on load', () => {
    cy.get('.grid-view-item__cta').each(($btn) => {
      expect($btn).to.have.css('opacity', '0')
    })
  })

  // unfortunately we can't check for the hover state because Cypress has no reliable hover action
  // tried with .trigger('mouseover') and .trigger('mouseenter') but neither gave the result needed
})
  
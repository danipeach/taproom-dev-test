const bps = ['iphone-x', 'ipad-mini', 'macbook-13'];

describe('Accordion', () => {
  bps.forEach(($bp) => {
    it(`sees the accordion on ${$bp}`, () => {
      cy.get('.accordion')
    })

    it(`check accordion styling on ${$bp}`, () => {
      cy.viewport($bp)
      cy.get('.accordion').as('acc')

      cy.get('@acc').find('.panel').each(($pan) => {
        expect($pan).to.have.css('margin-top', '-1px')

        cy.get($pan).find('.panel-title').each(($t) => {
          expect($t).to.have.css('cursor', 'pointer')
            .and.to.have.css('margin-bottom', '0px')
            .and.to.have.css('position', 'relative')
        })

        cy.get($pan).find('.panel-content-wrapper').each(($cw) => {
          expect($cw).to.have.css('overflow', 'hidden')
        })

        cy.get($pan).find('.panel-content').each(($c) => {
          expect($c).to.have.css('padding', '22.5px 22.5px 22.5px 30px')
        })
      })

      if ($bp == 'iphone-x') {
        cy.get('@acc').should(($acc) => {
          expect($acc).to.have.css('margin', '0px -22px')
        })

        cy.get('@acc').find('.panel').each(($pan, $i, $len) => {
          expect($pan).to.have.css('background-color', 'rgb(248, 248, 248)')

          cy.get($pan).find('.panel-title').should(($t) => {
            if ($i == 0) {
              expect($t).to.have.css('border-top-width', '0px')
            } else if ($i == ($len.length - 1)) {
              expect($t).to.have.css('border-bottom-width', '0px')
            } else {
              expect($t).to.have.css('border-bottom', '1px solid rgb(216, 216, 216)')
                .and.to.have.css('border-top', '1px solid rgb(216, 216, 216)')
                .and.to.have.css('padding', '22.5px 45px 22.5px 30px')
            }
          })

          cy.get($pan).find('.panel-content').should(($c) => {
            if ($i == ($len.length - 1)) {
              expect($c).to.have.css('border-top', '1px solid rgb(216, 216, 216)')
            }
          })
        })
      }

      if ($bp == 'ipad-mini' || $bp == 'macbook-13') {
        cy.get('@acc').find('.panel').each(($pan, $i, $len) => {
          expect($pan).to.have.css('background-color', 'rgba(0, 0, 0, 0)')

          if ($i != ($len.length - 1)) {
            expect($pan).to.have.css('margin-bottom', '15px')
          }

          cy.get($pan).find('.panel-title').should(($t) => {
            expect($t).to.have.css('border', '1px solid rgb(216, 216, 216)')
              .and.to.have.css('padding', '25.5px 51px 25.5px 34px')
          })

          cy.get($pan).find('.panel-content').should(($c) => {
            expect($c).to.have.css('background-color', 'rgb(248, 248, 248)')
              .and.to.have.css('margin-top', '15px')
          })
        })
      }
    })

    it(`can open each panel on the accordion on ${$bp}`, () => {
      cy.get('.accordion').find('.panel').each(($pan) => {
        cy.get($pan).find('.panel-title').click().then(($t) => {
          if($t.parent().hasClass('active')) {
            cy.get($t).next().should('not.have.css', 'max-height', '0px')
          } else {
            cy.get($t).next().should('have.css', 'max-height', '0px')
          }
        })
      })
    })
  })
})

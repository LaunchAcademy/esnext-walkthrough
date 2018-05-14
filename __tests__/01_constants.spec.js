describe('constants', () => {
  it('is best used when a value does not change', () => {
    function determineBouncerAction() {
      let drinkingAge = 21
      let cardedCustomerAge = 22

      if(cardedCustomerAge > drinkingAge){
        return 'let them in'
      }
      else {
        return 'tell them to go get a fake id'
      }
    }

    expect(determineBouncerAction()).toEqual('let them in')
  })

  it('fires an error if the value is reassigned', () => {
    let drinkingAge = 21
    drinkingAge = 18
  })
})


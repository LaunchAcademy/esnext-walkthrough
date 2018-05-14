describe("default arguments", () => {
  it('creates a construct for argument defaults', () => {
    // const isLegal = (patronAge, legalDrinkingAge) => {
      // //assume a US establishment
      // if(legalDrinkingAge === undefined){
        // legalDrinkingAge = 21
      // }
      // return patronAge >= legalDrinkingAge
    // }
    const isLegal = (patronAge, legalDrinkingAge = 21) => {
      return patronAge >= legalDrinkingAge
    }

    expect(isLegal(25)).toEqual(true)
    expect(isLegal(18)).toEqual(false)
  })

})

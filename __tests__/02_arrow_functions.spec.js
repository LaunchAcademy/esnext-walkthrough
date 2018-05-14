describe('arrow functions', () => {
  it('has a one line shorthand', () => {
    const odds = [1, 2, 3].filter(function(i) { return i % 2 !== 0 })
    expect(odds).toEqual([1,3])
  })

  it('has a longer format', () => {
    const odds = [1, 2, 3].filter(function(i) {
      const isOdd = i % 2 !== 0
      return isOdd
    })
    expect(odds).toEqual([1,3])
  })

  it('binds lexically to this', () => {
    function Patron(age) {
      const drinkingAge = 21

      this.age = age
      let self = this
      this.isLegal = function() {
        return self.age >= drinkingAge
      }
    }

    const legalPatron = new Patron(25)
    expect(legalPatron.isLegal()).toEqual(true)

    const illegalPatron = new Patron(18)
    expect(illegalPatron.isLegal()).toEqual(false)
  })
})

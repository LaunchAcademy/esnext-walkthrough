describe('destructuring', () => {
  it('destructures JSON', () => {
    const Patron = (traits) => {
      const firstName = traits.firstName
      const lastName = traits.lastName
      const age = traits.age

      return {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
    }

    const legalPatron = Patron({
      firstName: 'Jon',
      lastName: 'Snow',
      age: 25
    })

    expect(legalPatron.age).toEqual(25)
  })

  it('deep destructures', () => {
    const Patron = (traits) => {
      const firstName = traits.firstName
      const lastName = traits.lastName
      const age = traits.age
      const street = traits.address.street
      const city = traits.address.city
      const state = traits.address.state
      const postalCode = traits.address.postalCode

      return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city,
        state, state
      }
    }


    const legalPatron = Patron({
      firstName: 'Jon',
      lastName: 'Snow',
      age: 25,
      address: {
        street: '1 North Way',
        city: 'Winterfell',
        state: 'MA',
        postalCode: '02111'
      }
    })

    expect(legalPatron.state).toEqual('MA')
  })

  it('also works with arrays', () => {
    const name = 'Jon Snow'
    const splitName = name.split(' ')
    const firstName = splitName[0]
    const lastName = splitName[1]

    expect(firstName).toEqual('Jon')
    expect(lastName).toEqual('Snow')
  })
})

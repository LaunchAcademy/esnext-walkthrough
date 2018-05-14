describe('template literals', () => {
  it('inserts values into the string', () => {
    const patron = {
      firstName: 'Jon',
      lastName: 'Snow',
      age: 25
    }

    // const message = 'You know nothing ' + patron.firstName + ' ' + patron.lastName
    const message = `You know nothing ${patron.firstName} ${patron.lastName}`
    expect(message).toContain(patron.firstName)
    expect(message).toContain(patron.lastName)
  })

  it('runs arbitrary javascript inside the template', () => {
    const patron = {
      firstName: 'Jon',
      lastName: 'Snow',
      age: 25
    }

    // const message = 'You know nothing' + [patron.firstName, patron.lastName].join(' ')
    const message = `You know nothing ${[patron.firstName, patron.lastName].join(' ')}`
    expect(message).toContain(patron.firstName)
    expect(message).toContain(patron.lastName)
  })
})

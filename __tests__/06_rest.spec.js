describe('rest array operations', () => {
  it('can be used to add items to an array', () => {
    let array = [0, 1, 2, 3]
    // array.push(4)
    // array.push(5)
    const newArray = [...array, 4, 5]
    expect(newArray[newArray.length - 1]).toEqual(5)
  })

  it('in combination with destructuring, we can shift', () => {
    let array = [0, 1, 2, 3]
    // const first = array.shift()
    // const rest = array
    const [first, ...rest] = array
    expect(first).toEqual(0)
    expect(rest).toEqual([1,2,3])
  })
})

describe('rest object operations', () => {
  it('can be used to add a new keys and values to a JSON object', () => {
    let patron = {
      firstName: 'Jon',
      lastName: 'Snow',
    }

    // patron.age = 25
    // patron.address = {
      // street: '1 North Way',
      // city: 'Winterfell',
      // state: 'MA',
      // postalCode: '02111'
    // }
    patron = {
      ...patron,
      age: 25,
      address: {
        street: '1 North Way',
        city: 'Winterfell',
        state: 'MA',
        postalCode: '02111'
      }
    }

    expect(patron.age).toEqual(25)
  })
})

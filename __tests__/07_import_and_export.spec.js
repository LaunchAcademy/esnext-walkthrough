const calculateArea = (width, height) => {
  return width * height
}

const calculatePerimeter = (width, height) => {
  return width * 2 + height * 2
}

const calculateCircleArea = (radius) => {
  return Math.PI * radius * 2
}

const calculateCirclePerimeter = (radius) => {
  return Math.PI * radius * radius
}

describe('importing and exporting modules', () => {
  it('allows us to selectively pull modules in', () => {
    expect(calculateArea(2,4)).toEqual(8)
    expect(calculatePerimeter(2,4)).toEqual(12)
  })

  it('allows us to namespace', () => {
    expect(calculateArea(2,4)).toEqual(8)
    expect(calculatePerimeter(2,4)).toEqual(12)
  })

  it('allows us to alias', () => {
    expect(calculateArea(2,4)).toEqual(8)
    expect(calculatePerimeter(2,4)).toEqual(12)

  })

})

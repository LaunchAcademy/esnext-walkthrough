// import { calculateArea, calculatePerimeter } from '../src/rectangle.js'
// import calculateArea, { calculatePerimeter } from '../src/rectangle.js'
import { * } as Rectange from '../src/rectangle.js'

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
    expect(Rectangle.calculateArea(2,4)).toEqual(8)
    expect(calculatePerimeter(2,4)).toEqual(12)

  })

})

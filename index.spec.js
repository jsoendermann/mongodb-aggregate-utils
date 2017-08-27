const { lookupOne } = require('.')

describe('lookupOne', () => {
  it('should work with default params', () => {
    const stages = lookupOne({
      from: 'there',
      localField: 'ourKey',
      foreignField: 'theirKey',
      as: 'newField',
      arrayName: 'arrayName',
    })

    expect(stages).toMatchSnapshot()
  })

  it('should respect the keepArray flag', () => {
    const stages = lookupOne({
      from: 'there',
      localField: 'ourKey',
      foreignField: 'theirKey',
      as: 'newField',
      arrayName: 'arrayName',
      keepArray: true,
    })

    expect(stages).toHaveLength(2)
  })
})

const arrayName = as => `${as}Array` // TODO random string

module.exports.lookupOne = ({
  from,
  localField,
  foreignField,
  as,
  arrayName = `lookupOneTmpArray_${Math.random().toFixed(8).slice(2)}`,
  keepArray = false,
}) => [
  { $lookup: { from, localField, foreignField, as: arrayName } },
  { $addFields: { [as]: { $arrayElemAt: [`$${arrayName}`, 0] } } },
  ...(keepArray ? [] : [{ $project: { [arrayName]: 0 } }]),
]

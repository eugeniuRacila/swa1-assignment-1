const baseModel = (place, time, from, to) => ({
  place,
  time,
  from,
  to,
});

export const forecastDataType = ({
  place,
  time,
  type,
  unit,
  value,
  from,
  to,
  ...options
}) =>
  Object.assign({}, baseModel(place, time, from, to), {
    type,
    unit,
    value,
    options,
  });

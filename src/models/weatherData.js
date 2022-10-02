const baseModel = (place, time) => ({
  place,
  time,
});

export const dataType = ({ place, time, type, unit, value, ...options }) =>
  Object.assign({}, baseModel(place, time), { type, unit, value, options });

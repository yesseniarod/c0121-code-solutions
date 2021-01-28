/* exported getPropertyValue */
function getPropertyValue(object, key) {
  if (key === 'birthPlace') {
    return object.birthPlace;
  } else if (key === 'name') {
    return object.name;
  } else if (key === 'occupation') {
    return object.occupation;
  } else {
    return 'error';
  }
}

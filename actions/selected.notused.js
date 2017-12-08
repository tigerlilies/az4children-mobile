var selected = {};

export const setGender = (gender) => {
  return ({
    type: 'SET_GENDER',
    payload: new Promise((resolve, reject) => {
      selected.gender = gender;
      resolve(selected);
    })
  });
};

export const setAge = (age) => {
  return ({
    type: 'SET_AGE',
    payload: new Promise((resolve, reject) => {
      selected.age = age;
      resolve(selected);
    })
  });
};

export const setLength = (length) => {
  return ({
    type: 'SET_LENGTH',
    payload: new Promise((resolve, reject) => {
      selected.length = length;
      resolve(selected);
    })
  });
};

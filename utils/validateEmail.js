const validEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = pattern.test(email) ? true : false;
  return isValid;
};

export default validEmail;

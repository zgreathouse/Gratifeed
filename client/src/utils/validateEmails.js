//a regular expression for validating emails
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim()) //remove all whitespace
    .filter(email => re.test(email) === false); //filter out all the proper emails

  //check to see if invalidEmails has any elements and if it
  //does, return the error message.
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};

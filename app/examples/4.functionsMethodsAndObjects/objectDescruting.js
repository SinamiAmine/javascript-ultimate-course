/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Object Descruturing');

const getUser = () => {
  return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'United States',
      city: 'California',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
//Output :
//Jhon
//29
//United States
//22
const doorNumber = user.address.fullAddress.doorNumber;

const { name : theName, age : theAge, address : { country : theCountry } } = user;
//Jhon
//29
//United States
//22
const { address : { fullAddress : { doorNumber : number } } } = user;
//Jhon
//29
//United States
//22

log(theName);
log(theAge);
log(theCountry);
log(number);

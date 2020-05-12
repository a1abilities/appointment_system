import { validString, validNumber, validDecimalNumber, validFullLengthDecimalNumber, validEmail, validAlpha } from './Regex';
import {checkFutureDate, checkPastDate} from '../utils/datetime.js';

export default function validate(values) {
  let errors = {};
 
  if(!values.franchise_id){
    errors.franchise_id = 'please select franchise';
  }

  if(!values.role_id){
    errors.role_id = 'please select position';
  }

  return errors;
};
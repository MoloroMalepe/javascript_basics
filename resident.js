//import { Citizen } from "./citizen";
const {Citizen} = require ('./citizen.js');

let resident1 =  new Citizen('Mahlako', 3333333333);
resident1.addAddress('Finala');
resident1.getDetails();
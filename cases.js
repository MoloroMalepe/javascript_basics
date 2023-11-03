
let grade = 'A';
let result;

switch(grade){
    case 'A':
        result = 'Excellent';
        break;
    case 'B':
        result = 'Average';
        break;
    case 'C':
        result = 'Below average';
        break;
    default:
        result = 'No results';
        break;
}

console.log(result);
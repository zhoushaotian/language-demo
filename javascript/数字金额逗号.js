const num = 12345678901234567.128;

console.log(String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ','));

console.log(String(num).replace(/\d{1,3}(?=(\d{3})+(\.|$))/g,'$&,'));

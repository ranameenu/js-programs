var user = {
  name: 'meenu',
  address: 'new delhi',
};
function test(name, address) {
  return 'Name: ' + name + ', Address: ' + address;
}
var functionCall1 = test.call(user.name, user.address);
console.log(functionCall1);

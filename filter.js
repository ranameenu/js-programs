function swap() {
  var a, b, c;
  a = document.getElementById("demo1").value;
  b = document.getElementById("demo2").value;
  c = a;
  a = b;
  b = c;
  document.getElementById("demo3").value = a;
  document.getElementById("demo4").value = b;
}

const arr = [1, 5, 3, 8, 10, 45, 35, 34];
var i = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

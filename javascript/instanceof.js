function instance_of(L, R) {
  let R_proto = R.prototype;
  L = L.__proto__;
  while (true) {
    console.log(L);
    if (L === null)
      return false;
    if (L === R_proto)
      return true;
    L = L.__proto__;
  }
}

console.log(instance_of(2, String));

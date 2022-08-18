let numero = 1;
{
  let numero = 2; //usando let, mesmo sendo c/ o msm nome do let acima, ele só fica visível neste escopo {}
  console.log("dentro =", numero); // let local
}
console.log("fora =", numero); //let global

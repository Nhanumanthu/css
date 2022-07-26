function palin(num)
{
  let number=num.toString()
  let n=number.length
  flag=true
  for (j=0;j<n/2;j++)
  {
    if (number[j]==number[n-j-1])
      flag=true;
    else
      flag=false
      break
  }
  return flag;
}

let number=10;
count=0
if (number<=9)
  count=number;
else{
  count=9
  for (i=10;i<=number;i++){
  if (palin(i)){
    count++;
  }
}
}
console.log(count)
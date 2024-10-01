let item=prompt("Enter the item:");
let qty=prompt("Enter the quantity:");
let discount=10;
let total=0;
switch(item){
    case "pizza":
        total=qty*200;
        break;
    case "burger":
        total=qty*300;
        break;
    case "hicken briyani":
        total=qty*250;
        break;
    case "apple juice":
        total=qty*100;
        break;
    case "idle":
        total=qty*80;
        break;
}
if(total>=500){
    dis=total*(discount/100);
    price=total-dis;
    console.log(price);
}

var arr = [];
var x = "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png";
var y = "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png";
var z = "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png";
arr.push(x);
arr.push(y);
arr.push(z);
var num = 2;
document.querySelector("#leftarrow").addEventListener("click", change_left_image);
document.querySelector("#rightarrow").addEventListener("click", change_right_image);
function change_left_image(){
    if(num==2){
      num = 0;
    }else{
        num++;
    }
    document.querySelector(".pazeemage").src = arr[num];
}
function change_right_image(){
    if(num==0){
        num = 2;
      }else{
          num--;
      }
      document.querySelector(".pazeemage").src = arr[num];  
}
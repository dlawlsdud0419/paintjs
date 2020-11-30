# paintjs
Painting Board made with VanillaJS

## 수정사항
### 리셋버튼 생성
#### 리셋버튼 누를시 초기화면으로 시작
````
const reset = document.getElementById("jsReset");
if(reset){
    reset.addEventListener("click", handleResetClick);
}
function handleResetClick(event){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, CANVAS_SIZE,CANVAS_SIZE);
    painting = false;
    filling = false;
    ctx.strokeStyle = "#INITIAL_COLOR";
    ctx.fillStyle ="INITIAL_COLOR";
    ctx.lineWidth = 2.5;
    mode.innerText = "Fill";
    range.value = 5;

}
````

 <a href="https://dlawlsdud0419.github.io/paintjs/">실행</a>

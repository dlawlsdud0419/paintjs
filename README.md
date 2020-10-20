# paintjs
Painting Board made with VanillaJS

#수정사항
시작하자마자 PAINT 클릭시 전체배경 변경 안되는거 수정!
function handleCanvasClick(){
    if(filling){
        ctx.fillStyle = ctx.strokeStyle; << 추가코드
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

#리셋버튼 생성
리셋버튼 누를시 초기화면으로 시작
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

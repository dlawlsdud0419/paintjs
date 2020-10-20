const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const reset = document.getElementById("jsReset");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0,0, CANVAS_SIZE,CANVAS_SIZE);
ctx.strokeStyle = "#INITIAL_COLOR";
ctx.fillStyle ="INITIAL_COLOR";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;


//배열에 있는 색 값 추출
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))



//드래그 정지
function stopPainting(){
    painting = false;
}

//드래그 시작
function startPainting(){
    painting = true;
}


//마우스 클릭후 커서 움직이면 발생하는 이벤트
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}

//색깔 클릭시 색 변경
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

//굵기 설정
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth= size;
}

// 펜모드, 채색모드 설정
function handleModeClick(event){
    if(filling == true){
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint";
        console.log(filling);
    }
}

//캔버스 색 전체 채우기
function handleCanvasClick(){
    if(filling){
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

//우클릭 방지
function handleCM(event){
    event.preventDefault();
}

//이미지 저장
function handleSaveClick(event){
    /*const img = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = img;
    link.download = "PaingJS[EXPORT]";
    link.click();*/

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



//이벤트 발생
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

//굵기 바 값 함수 실행
if(range){
    range/addEventListener("input", handleRangeChange);
}

//펜 모드 설정 함수 실행
if(mode){
    mode.addEventListener("click", handleModeClick);
}

//이미지 저장 함수 실행
if(save){
    save.addEventListener("click", handleSaveClick);
}

if(reset){
    reset.addEventListener("click", handleResetClick);
}





//假資料
let photoFlowData = [
    {id:1, msg:"哈哈哈", src:"01.jpg"},
    {id:1, msg:"哈哈哈", src:"02.jpg"},
    {id:1, msg:"哈哈哈", src:"03.jpg"},
    {id:1, msg:"哈哈哈", src:"04.jpg"},
    {id:1, msg:"哈哈哈", src:"05.jpg"},
    {id:1, msg:"哈哈哈", src:"06.jpg"},
    {id:1, msg:"哈哈哈", src:"01.jpg"},
    {id:1, msg:"哈哈哈", src:"02.jpg"},
    {id:1, msg:"哈哈哈", src:"03.jpg"},
    {id:1, msg:"哈哈哈", src:"04.jpg"},
    {id:1, msg:"哈哈哈", src:"05.jpg"},
    {id:1, msg:"哈哈哈", src:"06.jpg"},
    {id:1, msg:"哈哈哈", src:"03.jpg"},
    {id:1, msg:"哈哈哈", src:"04.jpg"},
    {id:1, msg:"哈哈哈", src:"05.jpg"},
    {id:1, msg:"哈哈哈", src:"06.jpg"},
    {id:1, msg:"哈哈哈", src:"01.jpg"},
    {id:1, msg:"哈哈哈", src:"04.jpg"},
    {id:1, msg:"哈哈哈", src:"05.jpg"},
    {id:1, msg:"哈哈哈", src:"06.jpg"},
    {id:1, msg:"哈哈哈", src:"02.jpg"},
    {id:1, msg:"哈哈哈", src:"01.jpg"},
    {id:1, msg:"哈哈哈", src:"01.jpg"},
    {id:1, msg:"哈哈哈", src:"02.jpg"},
]

//有幾條col
const myPhotoFlowCols = [
    "photo_flow_col_1",
    "photo_flow_col_2",
    "photo_flow_col_3",
    "photo_flow_col_4",
    "photo_flow_col_5",
]



//文字樣板
const data2PhotoFlowCard = obj =>{
    let result = "";
    result += `<div class="photo_flow_card"><img class="photo_flow_card_img" src="./img/${obj.src}" alt=""></div>`
    return result;
}

//判斷哪條col最短
const whoIsShortest = (array) => {
    let result;
    array.map((e) => {
        if( !result || (document.querySelector(`#${e}`).offsetHeight < result.offsetHeight) ){
            result = document.querySelector(`#${e}`);
        }
    })
    console.log(result.offsetHeight,result);
    return result;
}


(async function loop() {
    for (let i = 0; i < photoFlowData.length; i++) {
        await new Promise(resolve => {
            whoIsShortest(myPhotoFlowCols).innerHTML += data2PhotoFlowCard(photoFlowData[i]);
            setTimeout(resolve, 20)
        });
    }
})();



const switchPage = function( id ){

    //關閉所有
    document.querySelectorAll(".page").forEach(
        (item) =>{
            console.log(item);
            item.classList.add("hide");
        }
    )

    //開啟特定的
    document.querySelector(`#${id}`).classList.remove("hide");
}


//裝上事件聆聽
document.querySelectorAll(".link").forEach(
    (item, index) =>{
        item.addEventListener(
            'click',
            ()=>{         
                let tid = "page_" + index;
                console.log(tid);
                switchPage(tid);
            }
        )
    }
)

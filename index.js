let taskList = document.querySelector('.bottom')
let title = document.querySelector('#title')
let desc = document.querySelector('#descrip')
let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    if(title.value=='' ||  desc.value==''){
        alert('No task added, Provide the task details');
    }
    else{
    let task = document.createElement('div');
    task.setAttribute('class','task');
    task.innerHTML=`<h3>${title.value}</h3>
                    <p>${desc.value}</p>
                    <i class="ri-edit-2-fill edit"></i>
                    <i class="ri-delete-bin-6-line delete"></i>`
                    taskList.appendChild(task)   
    title.value =  ""
    desc.value =  ""
    task.querySelector('.delete').addEventListener('click',()=>{
        task.remove();
        alert('Removing your task')
    });
        let ed = task.querySelector('.edit').addEventListener('click', () => {
            task.contentEditable = true;
            alert('Editing your task');    
            // tasked.style.display = 'none';
    });   
}})



// task.querySelector('#edit').addEventListener('click',()=>{
    //     task.title.value = this.task.title.value
    // })
    // console.log(task);
    //     let objInp = { 'titleVal': titleVal, 'descVal': descVal };
    //     listVal.push(objInp);
    //     console.log(objInp);
    
    //     displayItems();
    
    // })
    
    // function displayItems() {
//     let Items = listVal.map(function (e) {
//         let elem = `<h1>${e.titleVal}</h1>
//             <h3>${e.descVal}</h3>`
//         return elem
//     }
//     )
//     return Items;
// }
//
// let listVal = [];
// var titleVal = "";
// var descVal = "";
// title.addEventListener('keyup', function (e) {
//     titleVal = e.target.value
//     console.log(titleVal)
// })
// desc.addEventListener('keyup', function (e1) {
//     descVal = e1.target.value
//     console.log(descVal)
// })
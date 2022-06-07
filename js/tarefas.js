function add() {
  let li = document.createElement('LI');
  let input_value = document.form_main.task.value; 
  let date_value = new Date(document.form_main.Data.value)  ;
  let data =(date_value.getDate() +1)+ "/" + (date_value.getMonth() + 1) + "/" + date_value.getFullYear()
  let input_text = document.createTextNode(data+': ' +input_value);
  li.className = date_value;
  addItemOrder(li);
  li.appendChild(input_text ); 
  li.appendChild(document.createTextNode(" "));
  createCloseButton(li);
  li.appendChild(document.createTextNode(" "));
  createEditButton(li,input_value,date_value);
}
function addItemOrder(li){
  document.querySelector('ul').appendChild(li);
  sortList();
} 
function createCloseButton(li) { 
  let bt = CreateItem("fa fa-minus","excluir", li );
  bt.onclick = () => document.querySelector('ul').removeChild(bt.parentElement) ;
}
function createEditButton(li, taskItem, data) {
  let bt = CreateItem("fa fa-pencil","editar", li );   
  bt.onclick = () => {
    document.querySelector('ul').removeChild(bt.parentElement) ;
    document.form_main.task.value = taskItem; 
    document.form_main.Data.value =data.getFullYear().toString().padLeft(4,'0')  + "-" + (data.getMonth() + 1).toString().padLeft(2,'0') + "-" + (data.getDate()+1).toString().padLeft(2,'0');
  }
}
function CreateItem(classname,name, li ){
    let bt = document.createElement("button");
    let txt = document.createElement("i"); 
    txt.setAttribute("class",classname); 
    bt.appendChild(txt);  
    bt.className = "btnAcao";  
    li.appendChild(bt); 
    return bt;
}  
String.prototype.padLeft = function (length, character) { 
  return new Array(length - this.length + 1).join(character || '0') + this; 
}

function sortList() {
  var list, i, troca, b, podeTrocar;
  list = document.querySelector('ul');
  troca = true; 
  while (troca) { 
    troca = false;
    b = list.getElementsByTagName("LI"); 
    for (i = 0; i < (b.length - 1); i++) { 
      podeTrocar = false; 
      if (Date.parse(b[i].className)  > Date.parse(b[i + 1].className.toLowerCase())) { 
        podeTrocar = true;
        break;
      }
    }
    if (podeTrocar) { 
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      troca = true;
    }
  }
}
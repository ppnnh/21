async function Update(){
    const FIO=document.getElementById("FIO").value
    const number=document.getElementById("number").value
    let obj={
        FIO: FIO,
        number: number
    }
    console.log(obj)
    const response=await fetch(`/update`,{
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(obj)
    });
    console.log(JSON.stringify(obj))
}
async function Delete(){ 
    const id=document.getElementById("FIO").value
    console.log(id)
    const response=await fetch(`/delete/${id}`,{
        method:'POST'
    });
}
function Change() {
    document.getElementById("Delete").disabled = true;
}

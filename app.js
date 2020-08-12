function update(){
    const bill = document.getElementById("yourBill").value;
    const tipPercent = document.getElementById("tipInput").value;
    const split = document.getElementById("splitInput").value;
    console.log({bill, tipPercent, split})
}

const container = document.getElementById("container")
container.addEventListener("input", update)
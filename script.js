const block = document.querySelector('.block');
const text = document.querySelector('.text');

block.addEventListener("mouseenter", stepTwo);
block.addEventListener("mousedown", stepThree);

function stepTwo() {
    this.style.backgroundColor = 'yellow';
    text.innerHTML = 'Хочеш знати який?'
    text.style.color = 'blue';
    this.style.border = "5px ridge black";
};

function stepThree() {
    this.style.backgroundColor = 'black';
    text.innerHTML = 'А я тобі не скажу';
    text.style.color = 'white';
    this.style.border = "5px ridge yellow";
}

block.addEventListener("mouseleave", function(event){
    event.target.style.backgroundColor = "rgb(192, 32, 168)";
    text.innerHTML = "У мене є секрет!";
    text.style.color = 'black';
    this.style.border = '5px ridge rgb(232, 146, 16)';
})

block.addEventListener("mouseup", function(event){
    this.style.backgroundColor = 'yellow';
    text.innerHTML = 'Хочеш знати який?'
    text.style.color = 'blue';
    this.style.border = "5px ridge black";
})


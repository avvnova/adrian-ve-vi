window.onload = function{
    setInterval(() => {shake()}, 10);

};

function shake(){
    window.scrollBy(0, 10);
    window.scrollBy(0, -10);
}
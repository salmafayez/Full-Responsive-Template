

document.addEventListener('mousemove',movecc)

function movecc(e)
{
    console.log(e.offsetX)
    console.log(e.offsetY)
    document.getElementById('cursorImg').style.start=e.offsetX;
    document.getElementById('cursorImg').style.top=e.offsetY;
}
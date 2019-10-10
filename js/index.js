//event 1 Fun Bus text to Fun Bus img
const changeText = document.querySelector('.logo-heading');
changeText.addEventListener("dblclick", () => {
    changeText.innerHTML = "<img src='img/school-bus.png'> Fun Bus"
    console.log(changeText)
})


//event 2 highlight the text to class destination
const changeTextColor = document.querySelectorAll('.destination');
changeTextColor.forEach((elem) => {
    elem.addEventListener("mouseenter", (event) => {
        event.target.style.color = "purple";
        // console.log(changeTextColor)
        //reset color after delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 500);
    }, false);
});


//event 3 added button onclick
const buttonFooter = document.createElement('button');
buttonFooter.innerText = 'Take Me Home';
buttonFooter.onclick = () => {
    scroll(0, 0);
}
const secondaryButton = document.querySelector('footer p');
secondaryButton.prepend(buttonFooter);
// console.log(secondarylink)


//event 4 rotate on mouseover (only rotates once but still outputs?)
const imgRotate = document.querySelectorAll('.img-content')
imgRotate.forEach((elem) => {
    elem.addEventListener("mouseover", (event) => {
        elem.style.transform = 'rotate(180deg)';
        //reset img rotate
        setTimeout(() => {
            event.target.style.transform = "rotate(180deg)";
            // console.log(imgRotate)
        }, 500);
    }, false);
});


//event 5 scroll
const body = document.querySelector("body");
window.addEventListener("scroll", () => {
    body.style.backgroundColor = "#000000";
    body.style.color = "#708090";

    //reset scroll
    // setTimeout(() => {
    //     body.target.style.backgroundColor = "#FFFFFF";
    //     body.target.style.color = "#000000";
    // }, 500);
});


//event 6 keydown
body.addEventListener('keydown', () => {
    alert('Error: Broken Ctrl Key');
});


//event 7 click
const divGroup = document.querySelectorAll(".text-content");
divGroup.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = "darkgrey";
        console.log(divGroup)
    });
})


// event 8 click stop propagation
const pElem = document.querySelector(".text-content p");
pElem.addEventListener('click', (event) => {
    pElem.style.backgroundColor = "hotpink";
    //   console.log(event);
    event.stopPropagation();
})


// event 9 resize
const sharkAttack = document.querySelector(".intro img")
window.addEventListener('resize', () => {
    sharkAttack.src = "https://images.unsplash.com/photo-1497543273833-e64b94e67a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
    // console.log(sharkAttack)
})


//event 10 wheel 
const Opacity = document.querySelector('.content-destination')
Opacity.addEventListener('wheel', () => {
    Opacity.style.opacity = "0.3";
    Opacity.style.backgroundColor = "white";
});


//stop navigation
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
    console.log("stopped link");

    event.preventDefault();
})

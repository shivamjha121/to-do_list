let input = document.querySelector("#newtask")
let btn = document.querySelector("#addtask")
let ul = document.querySelector("#tasklist")

document.body.addEventListener("keydown", (ev) => {
  if (ev.key == "Enter") {
    let li = document.createElement("li")
    li.innerHTML = input.value
    li.classList.add("txt")

    ul.appendChild(li)
    //btn1
    let btn1 = document.createElement("button")
    btn1.innerHTML = ("⬆️")
    li.append(btn1)
    btn1.classList.add('btns')


    btn1.addEventListener('click', function (ev) {
      ul.insertBefore(li, btn1.parentElement.previousSibling)

    })
    
    if (li == ul.firstChild) {
      btn1.remove();
    }

    // btn2
    let btn2 = document.createElement("button")
    li.append(btn2)
    btn2.innerHTML = '❌'
    btn2.classList.add('btns')

    btn2.addEventListener('click', (ev) => {
      li.remove();
    })
    //btn3
    let btn3 = document.createElement("button")
    li.append(btn3)
    btn3.innerHTML = '⬇️'
    btn3.classList.add('btns')

    btn3.addEventListener('click', function (ev) {
      ul.insertBefore(li, li.nextElementSibling)
    })
    // if (li = ul.lastElementChild) {
    //   btn1.style.display = 'none';
    // }
  }
});

















//Add Button

btn.addEventListener('click', (ev) => {


  let li = document.createElement("li")
  li.innerHTML = input.value
  li.classList.add("txt")

  ul.appendChild(li)
  //btn1
  let btn1 = document.createElement("button")
  btn1.innerHTML = ("⬆️")
  li.append(btn1)
  btn1.classList.add('btns')
  // if (li == ul.firstChild) {
  //   btn1.style.display = 'none';
  // }

  btn1.addEventListener('click', function (ev) {
    ul.insertBefore(li, btn1.parentElement.previousSibling)


  })

  // btn2
  let btn2 = document.createElement("button")
  li.append(btn2)
  btn2.innerHTML = '❌'
  btn2.classList.add('btns')

  btn2.addEventListener('click', (ev) => {
    li.remove();
  })
  //btn3
  let btn3 = document.createElement("button")
  li.append(btn3)
  btn3.innerHTML = '⬇️'
  btn3.classList.add('btns')
  btn3.addEventListener('click', function (ev) {
    ul.insertBefore(li, btn3.parentElement.nextSibling)
  })

})
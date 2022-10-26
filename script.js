// READ MORE BTNs
function btnSelection(c) {
  var y = document.querySelectorAll(".moretext");
  var z = document.querySelectorAll(".btn");
  console.log(z);
  for (i = 0 ; i < y.length ; i++) {
    if (y[i].className.split(" ").indexOf(c) > -1) {
      y[i].classList.toggle("show");
      if (z[i].innerText === "Read More") {
        z[i].innerText = "Read Less";
      } else {
        z[i].innerText = "Read More";
      }
    }
  }
}

// TAGS
function tagSelection(c) {
  var x = document.querySelectorAll(".all");
  console.log(x);
  for (i = 0 ; i < x.length ; i++) {
    if (x[i].className.split(" ").indexOf(c) > -1) {
      addClass(x[i], "show");
    } else {
      addClass(x[i], "hide");
    }
  }
}

function addClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name;
  checkAndRemove(arr1, element);
  element.className += " " + arr2;
}

function checkAndRemove(input, element) {
  input;
  if (input.indexOf("show") > -1) {
    element.classList.remove("show");
  }
  if (input.indexOf("hide") > -1) {
    element.classList.remove("hide");
  }
  return element;
}







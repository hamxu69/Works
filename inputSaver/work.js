var btn = document.querySelector(".create");
btn.addEventListener("click", create);
function create() {
  var id = document.querySelector(".id").value;
  var Name = document.querySelector(".name").value;
  var major = document.querySelector(".major").value;
  var country = document.querySelector(".country").value;
  if  (id && Name && major && country) {
    
    var newDiv = document.createElement("div");
    newDiv.classList.add("background");
    newDiv.innerHTML = ` <label for="id">
          ID:
          <input class="id" type="text" disabled value="${id}"/>
        </label>
        <label for="id">
          Name: <input class="name" type="text" disabled value="${Name}"/>
        </label>
        <label for="id">
          Major: <input class="major" type="text" disabled value="${major}"/>
        </label>
        <label for="id">
          Country: <input class="country" type="text" disabled value="${country}"/>
        </label>
         <button class="removeButton">Remove</button>
  
        `;
  
    var container = document.querySelector(".container");
    container.appendChild(newDiv)
    document.querySelector(".id").value = '';
    document.querySelector(".name").value = '';
    document.querySelector(".major").value = '';
    document.querySelector(".country").value = '';
  
    var removebtn = newDiv.querySelector(".removeButton").addEventListener('click' , function () {
        newDiv.remove()
    })
  } else {
    alert('HELLO FILL THE SLOTS WRITE!')
  }
}
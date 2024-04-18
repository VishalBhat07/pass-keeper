document.getElementsByClassName(".btn").addEventListener("click", (e) => {
  //   e.preventDefault();
  console.log("clicked ...");
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
});

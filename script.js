//your JS code here. If required.
window.addEventListener("DOMContentLoaded",()=>{
	const usernameInput=document.getElementById("username");
	const passwordInput=document.getElementById("password");
	const checkbox=document.getElementById("checkbox");
	const submitbtn=document.getElementById("submit");
	const existingBtn=document.getElementById("existing");

	  existingBtn.style.display = "none";

	const savedUsername=localStorage.getItem("username");
	const savedPassword=localStorage.getItem("password");

	if(savedPassword && savedUsername)
	{
		existingBtn.style.display= "inline-block";
	}

	// Submit button
	submitbtn.addEventListener("click",(event)=>{
		event.preventDefault();

		const username=usernameInput.value.trim();
		const password=passwordInput.value.trim();

		if(username=="" || password=="")
		{
			alert("Please Enter both username and password.");
			return;
		}
		alert(`Logged in as ${username}`);

		//save or remove credential
		if(checkbox.checked)
		{
			localStorage.setItem("username",username);
			localStorage.setItem("password",password);
			existingBtn.style.display="inline-block";
		}
		else
		{
			localStorage.removeItem("username");
			localStorage.removeItem("password");
			existingBtn.style.display="none";
		}
	});
	//existing user login button behaviour

	 existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    } else {
      alert("No saved user found!");
    }
  });	
});
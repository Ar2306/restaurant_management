async function signup(event) {
  event.preventDefault(); // Prevent the default form submission

  // Step 3: Create FormData object
  const formData = new FormData(this);

  // Step 4: Convert FormData to a JSON object
  const jsonObject = {};
  for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        alert("Don't submit with an empty field !")
        break;
      }
      jsonObject[key] = value;
  }
  

  // Step 5: Convert JSON object to a JSON string
  const jsonString = JSON.stringify(jsonObject);

  // Output the JSON string to the console or send it to a server
  console.log(jsonString);

  const res = await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  });
  if(res.status === 409) alert("Username or Email already exists...")
  else window.location.replace('/signin');  
}

document.getElementById("Form").addEventListener("submit", signup);

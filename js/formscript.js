function MyFormSubmits(event) {
    event.preventDefault(); // Prevent the default form submission
   
    console.log("thank you test message")
    // Call the custom functions you want to execute before submitting the formn
    downloadformdata();
    thanks();
}
 
function downloadformdata() {
    const form = document.getElementById('myform')
    const formdata = new FormData(form)
    let datastring = '';
 
    for (let [key, value] of formdata.entries()) {
        datastring +=`${key}: ${value}\n`;
    }
 
    // Create a Blob from the data string
    const blob = new Blob([datastring], {
        type: `text/plain`
    });
    const url = URL.createObjectURL(blob);
 
    // Create a link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
 
    // Revoke the object URL after download
    URL.revokeObjectURL(url);
}
 
 
function thanks()  {
    // Redirect to another page after download
    window.location.href = 'thankyou.html'; // Replace with your desired URL
}
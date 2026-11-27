const textArea = document.getElementById('building');
const copyBtn = document.getElementById('copyBtn');
const statusMsg = document.getElementById('copyStatus');


copyBtn.addEventListener("click", async () =>{
    try{
       const text = textArea.value;

       if (!text.trim()) {
    statusMsg.textContent = 'Nothing to copy';
    statusMsg.style.color = 'orange';
    return;
  }

        await navigator.clipboard.writeText(text);
        statusMsg.textContent = "Text copied";
        statusMsg.style.color = "green";
    }catch(err){
        statusMsg.textContent = "Failed to copy";
        statusMsg.style.color = "red";
    }

})
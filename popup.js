const btn = document.querySelector('.btn')
const title = document.querySelector('#Title')
btn.addEventListener('click',async()=>{
   const tab = await chrome.tabs.query({ active: true, currentWindow: true });
        var tab1 = tab[0];
        var url = tab1.url;
        title.innerHTML = `<b>URL copied<br></b>`+url;
        await navigator.clipboard.writeText(url);
})
document.addEventListener ("DOMContentLoaded",function(){
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if (xhr.readyState===4 && xhr.status===200){
            const data =JSON.parse(xhr.responseText);
            displayUsers(data);
        }
    };

    
});
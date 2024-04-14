document.addEventListener ("DOMContentLoaded",function(){
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if (xhr.readyState===4 && xhr.status===200){
            const data =JSON.parse(xhr.responseText);
            mostrarUsuarios(data);
        }
    };

    xhr.onerror=()=>{
        console.error('Error en la solicitud Ajax');
        };
   
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
    
    
    function mostrarUsuarios(usuarios){
        const usuariosLista = document.getElementById('usuariosLista');
        usuarios.forEach(usuario => {
            const li= document.createElement('li');
            li.innerHTML=`<strong>${usuario.name}</strong> - ${usuario.email}`;
            usuariosLista.appendChild(li);
            
        });
    }


});
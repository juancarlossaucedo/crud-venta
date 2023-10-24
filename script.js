document.addEventListener("DOMContentLoaded", () => {
    const nombresInput = document.getElementById("nombres");
    const apellidosInput = document.getElementById("apellidos");
    const clientesList = document.getElementById("clientes");
    const clienteForm = document.getElementById("cliente-form");

    // Función para cargar la lista de clientes
    function listarClientes() {
        fetch('http://192.168.0.104:8081/api/clientes/listar')
            .then(response => response.json())
            .then(data => {
                clientesList.innerHTML = "";
                data.forEach(cliente => {
                    const li = document.createElement("li");
                    li.classList.add("list-group-item");
                    li.innerHTML = `${cliente.nombres} ${cliente.apellidos}`;
                    clientesList.appendChild(li);
                });
            })
            .catch(error => console.error(error));
    }

    // Función para guardar un cliente
    clienteForm.addEventListener("submit", event => {
        event.preventDefault();

        const nuevoCliente = {
            nombres: nombresInput.value,
            apellidos: apellidosInput.value,
        };

        fetch('http://192.168.0.104:8081/api/clientes/guardar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoCliente),
        })
            .then(response => response.json())
            .then(data => {
                listarClientes();
                nombresInput.value = "";
                apellidosInput.value = "";
            })
            .catch(error => console.error(error));
    });

    // Cargar la lista de clientes al cargar la página
    listarClientes();
});

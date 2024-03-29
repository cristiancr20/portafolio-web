const API_URL = 'https://portafolio-backend-dev-hbbt.2.ie-1.fl0.io';

export const iniciarSesion = async (user) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();
        if (response.ok) {
            // Guarda el token en el almacenamiento local
            localStorage.setItem('token', data.token);
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.log(error);
        throw new Error('Hubo un error en el inicio de sesión. Inténtalo de nuevo más tarde.');
    }
};

//registrar pagina
export const crearPagina = async (pagina) => {
    try {
      const response = await fetch(`${API_URL}/crear/pagina`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pagina),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Hubo un problema al crear la apgina.");
      }
  
      return data;
    } catch (error) {
      throw new Error("Hubo un problema con la solicitud: " + error.message);
    }
  };
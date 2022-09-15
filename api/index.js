export const API = "https://strangers-things.herokuapp.com/api/2206-vpi-rm-web-pt";
export const cohort = "2206-vpi-rm-web-pt";

export async function fetchPosts() {
    const token = localStorage.getItem('token');
    try{
        const response = await fetch(`${API}/posts`, {
            headers:{'Content-Style': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        }) 
        return response;
            
    } catch (error) {
        console.error("Mistakes have been made");
    }
}
export const login= async (username, password) => {
    try {
        const response=  fetch(`${API}/users/login`, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
        const data = await response.json();
        console.log(data.token)
        localStorage.setItem("token, data.token")
        return data;
    } catch (error) {
        console.error("Mistakes have been made");
    }
}
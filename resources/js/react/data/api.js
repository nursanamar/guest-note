export async function getNotes() {
    let token = localStorage.getItem("token");
    let headers = {}
    let url = "api/notes";
    if (token) {
        headers = {
            "Authorization": "Bearer " + token
        }
        url = "api/notes/admin"
    }
    return fetch(url,{headers: headers}).then(res => res.json())
}

export async function newNote(note) {
    return fetch("api/notes",{
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

export async function login(cred) {
    return fetch("api/login",{
        method: "POST",
        body: JSON.stringify(cred),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
}

export async function deleteNote(id) {
    let token = localStorage.getItem("token");

    return fetch("api/notes/" + id,{
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(res => res.json())
}
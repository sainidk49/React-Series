
const API_URL = String(import.meta.env.VITE_API_URL)
///////////// fetch users API ////////////////
export async function fetchUsersApi() {
  try {
    const response = await fetch(
      `${API_URL}/getUsers`,
      {
        method: "POST",
      }
    );
    const result = await response.json();
    return result

  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

////////////////// add user api ///////////////////////
export async function addUserApi({ name, email, mobile }) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('mobile', mobile);
  try {
    const response = await fetch(`${API_URL}/setUser`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log('Api Call:', result);
    return result;
  } 
  catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
}

////////////////// update user api ///////////////////////
export async function updateUserApi({ userId, name, email, mobile }) {
  const formData = new FormData();
  formData.append('id', userId);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('mobile', mobile);
  try {
    const response = await fetch(`${API_URL}/updateUser`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log('Api Call:', result);
    return result;
  } 
  catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
}


////////////////// delete user api ///////////////////////
export async function deleteUserApi(id){
  let formData = new FormData()
  formData.append("id", id)
  try {
    let response = await fetch(`${API_URL}/deleteUser`, {
      method: 'POST',
      body: formData
    })
    let result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.log("Error :: " + error)
  }
}


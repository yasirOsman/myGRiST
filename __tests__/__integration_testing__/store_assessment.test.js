


const store = require('../../components/utility/storage');

const user_object = {users: [{username: "yasir",email:"yasir@aston.com",password: "Astonuni12",user_id: "yasir" + Date.now()}]}


test('See if the userData is stored and fetched properly', async () => {
    await store.storeUser(user_object)
    const data = await store.getUsers();
    const formatted_data = data[0]
    expect(formatted_data).toBe(exampleUserstring);
  });
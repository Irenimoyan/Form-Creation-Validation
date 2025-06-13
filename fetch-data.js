async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // clear the loading message
        dataContainer.innerHTML = '';


        // create a list to hold user names
        const userList = document.createElement('ul');

        // loop through the user data and add names to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the complete list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // handle any error that occur during fetch
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
        console.error('Error fetching user data:', error);
    };
    
}

document.addEventListener('DOMContentLoaded', fetchUserData);
// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYpXYRyIRdN8o0GyfVewSdUM2P3Q-tUb4",
    authDomain: "onlinetesting-42b6b.firebaseapp.com",
    databaseURL: "https://onlinetesting-42b6b-default-rtdb.firebaseio.com",
    projectId: "onlinetesting-42b6b",
    storageBucket: "onlinetesting-42b6b.appspot.com",
    messagingSenderId: "303642679764",
    appId: "1:303642679764:web:9ea15e68cbd228618dde41",
    measurementId: "G-V4TG46RRYG"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const LoginButton = document.getElementById('login');
const useridInput = document.getElementById('userid');

LoginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const userid = useridInput.value;

    // Check if user ID is valid (3 to 4 digits)
    if (!/^\d{3,4}$/.test(userid)) {
        // Display an error toast using Toastify
        Toastify({
            text: 'User ID must be a 3 to 4 digit number.',
            duration: 3000, // Display duration in milliseconds (e.g., 3000 ms = 3 seconds)
            close: true, // Show a close button
            gravity: 'top', // Display the toast at the top
            position: 'center', // Position of the toast (centered)
            backgroundColor: 'red', // Background color of the toast
            textColor: 'white',
            style: {
                textAlign: 'center', // Center text horizontally
                justifyContent: 'center', // Center text vertically
            },
        }).showToast();
        return;
    }

    // Create a new user entry in Firebase Realtime Database
    const userRef = database.ref('users').push();
    userRef.set({
        userId: userid
    })
        .then(() => {
            // Display a success toast using Toastify
            Toastify({
                text: 'Login successful',
                duration: 3000,
                close: true,
                gravity: 'top',
                position: 'center',
                backgroundColor: 'green',
                textColor: 'white',
                style: {
                    textAlign: 'center', // Center text horizontally
                    justifyContent: 'center', // Center text vertically
                },
            }).showToast();

            // Redirect the user to another page (e.g., game.html)
            window.location.href = './game.html';
        })
        .catch((error) => {
            console.error('Error creating user entry:', error);
        });
});

// create your App component here
import { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setImage(data.message);
                setIsLoading(true);
            })
            .catch((error) => console.error("Error fetching the dog image:", error));
    }, []);

    return (
        <div>
            {isLoading ? (
                <img src={image} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
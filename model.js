export const fetchData = async () => {
    const url = 'https://gist.githubusercontent.com/dupontdenis/b2e5e1b7460c239b39deb76f8d458908/raw/817a898940170ae4ea6d5b16ef462f959c4d38d1/gistfile1.txt';
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text(); 
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const parseProducts = (data) => {
    const arrayString = data.match(/\[.*\]/s)[0]; 
    return eval(arrayString);  
};
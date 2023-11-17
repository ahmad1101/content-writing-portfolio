
let scrollingDiv = document.querySelector('.blog-scroll');


let tileCreator = (title, keyword) => {
    let blogTile = document.createElement('div');
    blogTile.classList.add("blog-tile");
    
    let titleDiv = document.createElement('div');
    titleDiv.classList.add("title-div");
    
    let titleName = document.createElement('h3');
    titleName.innerHTML = title;
    titleDiv.appendChild(titleName);
    blogTile.appendChild(titleDiv);
    
    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    let readButton = document.createElement('button');
    readButton.classList.add('send-button');
    readButton.innerHTML = 'Read more';
    buttonDiv.appendChild(readButton);
    blogTile.appendChild(buttonDiv);
    scrollingDiv.appendChild(blogTile);


    let filePath = keyword;
    // readButton.addEventListener('click', () => {
    //     const fs = require("fs");

    //     fs.open(`content-files/${filePath}.docx`, "r", (err, file) => {
    //     if (err) throw err;
    //     console.log(file);
    //     });
    // });

    readButton.addEventListener('click', async () => {
        try {
            const response = await fetch(`/.netlify/functions/getContent?file=${keyword}.doc`);
            // Handle the response
            const content = await response.text();
            console.log('Content from Netlify function:', content);
        } 
        catch (error) {
            console.error('Fetch error:', error);
        }
    });

}

// tileCreator("The advantages of steel fabrication in construction", "steel-fabrication");
tileCreator("Google UAC: Why you need it for apps?", "google-uac");

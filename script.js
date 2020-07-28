const container = document.querySelector('#Sandbox');
    // This is for the 'pixel' divs? Idk, I'm keeping it
    let pixel_div =[] 

function divcreate(divSize)
{
    //for loop to generate divs
    for(var count = 0;count < (+divSize)**2;count++)
        {
            let n_div = document.createElement('div')
            n_div.className = "blank";
            n_div.textContent = "You Can Make IT!";
            container.appendChild(n_div);

        }

       
}

divcreate(20);
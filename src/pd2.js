let app = function() {
    const { body } = document;
    
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
    
    _nav(container);
    _content(container);
};

let _nav = function(container){
    var nav = document.createElement('nav');
    nav.classList.add('nav');
    container.appendChild(nav);
    
    var nav_ul = document.createElement('ul');
    nav_ul.classList.add('nav-list');
    nav.appendChild(nav_ul);
    
    var nav_tab = ['Beer', 'Coffe / Tea', 'Cocktail', 'Cocoa', 'Milk / Float / Shake', 'Shot', 'Punch / Party Drink', 'Homemade Liqueur'];
    
    for(var item of nav_tab){
        var nav_li = document.createElement('li');
        nav_li.classList.add('nav-list__item');
        nav_ul.appendChild(nav_li);
        
        var nav_a = document.createElement('a');
        nav_a.innerHTML = item;
        nav_a.href = '#';
        nav_li.appendChild(nav_a);
    }
    
    nav_ul.querySelector(':first-child').classList.add('nav-list__item--activ');
}

let _content = function(container){
    var imgs = [
        {
            title: 'Bijou',
            src: 'bijou.jpg'
        },
        {
            title: 'Negroni',
            src: 'negroni.jpg'
        },
        {
            title: 'Mojito',
            src: 'mojito.jpg'
        },
        {
            title: 'Texas Rattlesnake',
            src: 'rattlesnake.jpg'
        },
        {
            title: 'Egg Nogg',
            src: 'eggnogg.jpg'
        },
        {
            title: 'Zinger',
            src: 'zinger.jpg'
        }
    ];
    var temp = `
<ul class="images">
    ${imgs.map(img => `<li class="images__item">
            <div class="image">
                <img class="image__background" src="./assets/images/${img.src}">
                <h4 class="image__title">${img.title}</h4>
            </div>
        </li>`).join(" ")}
</ul>
`;
    
    var div = document.createElement('div');
    div.innerHTML = temp;
    
    container.appendChild(div);
}

export default app;
window.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        let section = e.target.id.split('Tab')
        const targetSection = document.getElementById(section[0]);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    let productPoplation = [
        {
            img: 'pro1.jpg',
            title: 'product 1'
        },
        {
            img: 'pro2.jpg',
            title: 'Paper Wrap'
        }, {
            img: 'pro3.jpg',
            title: 'product 1'
        }, {
            img: 'pro4.jpg',
            title: 'product 1'
        }, {
            img: 'pro5.jpg',
            title: 'product 1'
        }, {
            img: 'pro6.jpg',
            title: 'product 1'
        }, {
            img: 'pro7.jpg',
            title: 'product 1'
        },

    ]

    let productList = ''
    for (let item of productPoplation) {
        productList += ` 
        <div class='product-dev'>
            <div class="img">
                <img src="${item.img}" alt="" srcset="">
            </div>
            <div class="imgTitle">
               ${item.title}
            </div>
        </div>`
    }
    document.getElementById('products').innerHTML = productList

});

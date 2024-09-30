window.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        let section = e.target.id.split('Tab')
        console.log(e.target);
        
        const targetSection = document.getElementById(section[0]);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    let productPoplation = [
        {
            img: 'logo-img.svg',
            title: 'Sustainable packaging paper solutions',
            subTitle: 'AvinyaKraft is a leading company providing paper solutions for packaging materials. We offer a range of eco-friendly products including paper wrappings, paper strapping, corrugated boxes, paper bubble wraps, and paper tapes. Our product range provides good quality paper solutions to the customers willing to approch towards saving green planet.'
        }, {
            img: 'pro14.jpg',
            title: 'Wood chips pallets'
        }

    ]

    let productList = " <div class='banner-cont'>"
    for (let item of productPoplation) {
        productList += ` 
        <div class='product-dev'>
            <div class="img-card">
                <img src="${item.img}" alt="" srcset="">
            </div>
            <div class="imgTitle">
               ${item.title}
            </div>
            <div class="imgSubtitle">
               ${item.subTitle}
            </div>
        </div>`
    }
    productList += "</div>"
    document.getElementById('diff-main').innerHTML = productList


    let productPoplation2 = [
        {
            img: 'pro1.jpg',
            title: 'Cardboard strips',
            desp: "Cardboard strips or tacking strips are used primarily in upholstery. They come packaged in 10's and are usually 12mm wide and 1 meter long. Cardboard strips are used when upholstering furniture and chairs, usually on the outside arms and along the top back."
        },
        {
            img: 'pro2.jpg',
            title: 'Paper Wrap',
            desp: ' paper honeycomb wrap resembles the structure of honeycomb by making a structure of hexagonal cells of layers of kraft paper which makes it strong and provides a protection and cushioning for fragile items'
        }, {
            img: 'pro3.jpg',
            title: 'Paper tapes',
            desp: "Paper tapes are eco-friendly alternative for plastic tapes which are available with customisable sizes and types, ex- Kraft paper tapes, water activate tapes etc."
        }, {
            img: 'pro4.jpg',
            title: 'Kraft paper rolls',
            desp: 'These are the recyclable Processing substrates which are used for variety of applications in the printing as well as packaging industry. Mostly this is made up of most of the recycled paper.'
        }, {
            img: 'pro5.jpg',
            title: 'Corrugated boxes',
            desp: 'Corrugated boxes are the containers made from a few layers of Kraft paper and they are strong and durable. They are used either for secondary or tertiary Packaging mostly during transit and  can be used as primary packaging as well.'
        }, {
            img: 'pro6.jpg',
            title: 'Paper Envelops',
            desp: "Paper envelops are the carriers to hold the letters, documents, cards. Generally it got sealed from one end by adhesive for mailing purpose by postal services or courier companies."
        }, {
            img: 'pro7.jpg',
            title: 'Paper bags ',
            desp: 'Paper bags these are sustainable Alternative for plastic bags which helps fo carry the material after purchasing a product.'
        }, {
            img: 'pro8.jpg',
            title: 'Paper pallets',
            desp: 'Paper pallets - These are type of shipping pallets like plastic or wooden pallets. These are available in different size..'
        }, {
            img: 'pro10.jpg',
            title: 'Bio plastics',
            desp: "Biodegradable plastic is the type of plastic that can be broken down by living things like fungi or bacteria. This type of plastic is made from plant-based materials like corn, potato and wheat starch as opposed to oil-based plastics that are derived from petroleum."
        }, {
            img: 'pro11.jpg',
            title: 'Paper bubble wrap',
            desp: 'Paper bubble wraps effectively insulate and protect delicate products from impact and vibrations while in transportation. Its multi-layered design equally distributes pressure and absorbs shock, lowering the possibility of damaged packaged products'
        }, {
            img: 'pro12.jpg',
            title: 'Paper wrap',
            desp: 'Paper wrapping is an Eco-friendly solution made from a special type of Kraft Paper. alternative to LDPE Stretch films.'
        }, {
            img: 'pro13.jpg',
            title: 'Kraft Dunnage air bags',
            desp: ' Paper dunnage air bags are made for purpose of safe delivery of packages by every modes of transport. Air bags provides cushioning which helps to avoid collapsing of cargo during transit due to any sudden movement.'
        }, {
            img: 'pro14.jpg',
            title: 'Paper/ Wood pallets',
            desp: 'Paper pallets - These are type of shipping pallets like plastic or wooden pallets. These are available in different size..'
        }

    ]

    let productList2 = " <div class='product-10-cont'>"
    let i = 0
    for (let item of productPoplation2) {
        i++
        productList2 += ` 
        <div class='product-dev-10' style="${i % 2 ? "" : "flex-direction: row-reverse"}"   >
            <div class="img-card-10">
                <img src="${item.img}" alt="" srcset="">
            </div>
            <div class="imgdetial-10" >
              <h3 class="title">
               ${item.title}
              </h3>
                <div class="desp">
               ${item.desp}
              </div>
            </div>
        </div>`
    }
    productList2 += "</div>"
    document.getElementById('small-product-list').innerHTML = productList2

});

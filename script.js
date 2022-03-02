// Adding Spinner Optional

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;

}
const toggleSearch = displayStyle => {
    document.getElementById('phones').style.display = displayStyle;

}

// Phone Area 
// const productsContainer = document.getElementById('error');

let searchPhone = () => {
    let searchField = document.getElementById('input-field');
    let searchText = searchField.value;
    // console.log(searchText);

    // show spinner 
    toggleSpinner('block');
    toggleSearch('none');

    if (searchText == '') {
        alert('Please enter a name')
        toggleSpinner('none');


    }

    // Try to do error part 

    /*    else if (data.status === false) {

          productsContainer.innerHTML =
              "<h1 class='text-center'> No products found!!</h1>"

      }  */
    else {


        searchField.value = '';
        let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data));
        // console.log(url)
    }

}


// Display Result 

let displaySearchResult = phones => {
    let searchReasult = document.getElementById('search-result');
    searchReasult.textContent = '';

    // console.log(phones.data);

    let datas = phones.data;
    for (let data of datas) {

        // console.log(data.brand);
        const div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = `
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.brand}</h5>
          <p class="card-text">${data.phone_name}</p>
          <button class="info-btn" onclick = "getPhoneDetails('${data.slug}')">showDetails</button>
        `;
        searchReasult.appendChild(div);

    }
    // Spineer Hide 
    toggleSpinner('none');
    toggleSearch('block');

};

// Specific Phone Details Part 

let getPhoneDetails = phoneId => {
        // console.log(phoneId.data.mainFeatures);
        let url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`
        fetch(url)
            .then(res => res.json())
            .then(data => showDisplay(data));
        // .then(data => showDisplay(data));

    }
    // getPhoneDetails();

let showDisplay = value => {
    // console.log(value);
    const infoDiv = document.getElementById('phone-info');
    infoDiv.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${value.data.image}" class="card-img-top" alt="...">
    <h5>${value.data.name}</h5>
    <p>Realise Date: ${value.data.releaseDate ? value.data.releaseDate:'Not Available' }</p>
    <h4 class="text-center">Other Information</h4>
    <p class="text-center">chipset: ${value.data.mainFeatures.chipSet}</p>
    <p class="text-center">Displaysize: ${value.data.mainFeatures.displaySize}</p>
    <p class="text-center">Storage: ${value.data.mainFeatures.storage}</p>
    <p class="text-center">Sensor: ${value.data.mainFeatures.sensors}</p>

    `
    infoDiv.appendChild(div);

}
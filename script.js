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
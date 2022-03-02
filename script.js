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
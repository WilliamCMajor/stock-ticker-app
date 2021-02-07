function SearchView (viewId){
    // reference to the DOM view Form
    this.view = document.querySelector(viewId)

    this.configUI = function (){
        console.log("Search View INIT");
    }

    this.configUI()

    return this
}

export default SearchView
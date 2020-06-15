const circle_items = document.getElementsByClassName('circle-items');
const description_info = document.getElementsByClassName('description-info');

for (let item of circle_items) {
    item.onmouseover = () => {
        item.classList.remove('circle-items-grey')
        for(element of description_info){
             if(!element.className.includes('d-none')){
                 element.className += ' d-none';
             }
        }
        let elToShow = document.getElementById(item.id.replace('img-', ''));
        elToShow.classList.remove("d-none");
        // debugger;
    };
    console.log(item)
}

import "regenerator-runtime/runtime";
import axios from "axios";
import './style.scss'
// const row = document.querySelector(".row");

// const div = document.createElement("div");

// div.classList.add("col");

let values = null;
/////////// fetch dadta /////////////
const getTodoItems = async () => {
  try {
    const response = await axios.get(
      "https://api.tvmaze.com/shows/82/episodes"
    );

    let listItems = response.data;

    console.log(`GET: Here's the list of todos`, listItems);
    console.log(`GET: Here's the list of todosssssss`, listItems[0].name);

    return listItems;
  } catch (errors) {
    console.error(errors);
  }
};
///////////////////////////////
// function getTodoItems(value) {
//   axios.get("https://api.tvmaze.com/shows/82/episodes").then(
//     (response) => {
//       var result = response.data;
//       console.log(result);
//       value = result;
//       return value;
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }

const createListElement = async () => {
  const listItems = await getTodoItems();
 

  ///////////////////
  let ul = document.querySelector(".ul");
  ul.classList.add("row");
  listItems.forEach((movie) => {
    const listElement = document.createElement("li");
    ///st 1
   
    listElement.classList.add("col");
    listElement.classList.add("col-6");
    // listElement.classList.add("card");
    listElement.classList.add("card-my");
    
    listElement.classList.add("col-xs-6");
    listElement.classList.add("col-sm-6");
    listElement.classList.add("col-md-6");
    listElement.classList.add("col-lg-4");
    listElement.classList.add("col-xl-4");
    ///st 2-1
    const div_row_st2 = document.createElement("div");
    div_row_st2.classList.add("row");
    ///
    const div_st2_name = document.createElement("div");
    const div_st2_season = document.createElement("div");
    const div_st2_episode = document.createElement("div");
    div_st2_name.classList.add("name");
    div_st2_season.classList.add("season");
    div_st2_episode.classList.add("episode");
    ///////st 2-2
    const div_row_st2_2 = document.createElement("div");
    div_row_st2_2.classList.add("row");
    //
    const div_st2_2_summary = document.createElement("div");
    const div_st2_2_img = document.createElement("img");
    div_st2_2_summary.classList.add("summary");
    div_st2_2_img.classList.add("img");

    for (let key in movie) {
      if (key === "name") {
        div_st2_name.appendChild(document.createTextNode(` name: ${movie[key]}`));
        div_row_st2.appendChild(div_st2_name);
      }
      if (key === "season") {
        div_st2_season.appendChild(document.createTextNode(` season: ${movie[key]}`));
        div_row_st2.appendChild(div_st2_season);
      }
      if (key === "number") {
        
        div_st2_episode.appendChild(document.createTextNode(` episode: ${movie[key]}`));
        div_row_st2.appendChild(div_st2_episode);
      }
      if (key === "image") {
        let image = movie[key]
        
        for( let key2 in image){
          // console.log(image[key2])
            if(key2 === 'medium'){
              div_st2_2_img.src = image[key2]
              div_row_st2_2.appendChild(div_st2_2_img);
            }
        }
       
        
      }
      
      if (key === 'summary'){
        let summary = movie[key].slice(3,-4);
        div_st2_2_summary.appendChild(document.createTextNode(`summary: ${summary}`))
        div_row_st2_2.appendChild(div_st2_2_summary)
      }
    }
    listElement.appendChild(div_row_st2);
    listElement.appendChild(div_row_st2_2);
    // listElement.appendChild(listElement);
    ul.appendChild(listElement);
  });
};
const main = async () => {
  createListElement(await getTodoItems());
};
main();

let tableBody = document.querySelector(".cells");
let text = "";

const createRows = ({name,image,id,current_price,market_cap,price_change_percentage_24h,total_supply}) => {
  text += `<tr>
   <td><img src=${image} height=${20} />&nbsp; <span>${name}</span> </td>
  <td>${id}</td>
   <td>${current_price}</td>
   <td>$ ${market_cap}</td>
   <td>${price_change_percentage_24h ?price_change_percentage_24h:"0"} %</td>
   <td> ${total_supply?total_supply:"0"}</td>
</tr>`
}

const getData = async () => { 
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=id_desc&per_page=10&page=1&sparkline=false";
  let response = await fetch(url); 
  return response.json();
};
getData().then(json => {
json.map((item)=>createRows(item));
 // console.log(text);
  tableBody.innerHTML= text ;
});  


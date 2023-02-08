const from_select = document.getElementById("from_id");
const to_select = document.getElementById("to_id");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

async function getData () {
const data = await fetch("https://v6.exchangerate-api.com/v6/296f22dfb8902b392a0c8c63/latest/INR")
.then((data) => data.json())
.then((data) => {
    display(data);

})
};

function display(data){
    const entries = Object.entries(data.conversion_rates);
    const options = data.conversion_rates

    console.log(entries)
    entries.map(([key, val] = entry) => {   
        to_select.innerHTML += `<option value="${val}">${key}</option>`;
        from_select.innerHTML += `<option value="${val}">${key}</option>`;
    });
}
 const convert = ()=>{
    from=parseFloat(input.value/from_select.value)
    output = to_select.value;
    // console.log(input.value * output)
    result.value = from * output;
}
getData()

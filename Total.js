import { useState } from "react";


function Total() {
    const [prodsArray, setProdsArray] = useState([]);

    // For reading data from user through textboxes
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [tprice, setTprice]= useState(0);
    const [discount, setDiscount] = useState("No Discount");
    let n = 0;


    function ProductButton_click() {
        let prodObj = {};
        prodObj.name = name;
        prodObj.price = price;
        prodObj.quantity = quantity;
        prodObj.tprice = tprice;
        prodObj.discount = discount;


        let tempArray = [...prodsArray];
        if(quantity<10){

            tempArray.push(prodObj);
        }

        if(quantity>10 && quantity<20)
        {
            prodObj.tprice= price*0.9*quantity;
            tempArray.push(prodObj);
        }

        if(quantity>20 && quantity<30)
        {
            prodObj.tprice= price*0.8*quantity;
            prodObj.discount = "20% Off";
            tempArray.push(prodObj);
        }

        if(quantity>30 && quantity<40)
        {
            prodObj.tprice= price*0.7*quantity;
            prodObj.discount = "30% Off";
            tempArray.push(prodObj);
        }

        if(quantity>40 && quantity<50)
        {
            prodObj.tprice= price*0.65*quantity;
            prodObj.discount = "35% Off";
            tempArray.push(prodObj);
        }
        
        
        setProdsArray(tempArray);

        
    }
    function  deleteDept_click(dno)
    {
        let tempArray = [...prodsArray];
       
        let index = tempArray.findIndex(item => item.name == dno);
        tempArray.splice(index, 1);

        setProdsArray(tempArray);
    }

    function  selectDept_click(dno)
    {
        let deptObj = prodsArray.find(item => item.name == dno);

        setName(deptObj.name);
        setPrice(deptObj.price);
        setQuantity(deptObj.quantity);
    }


    let resultArray = prodsArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.name}  </td>
                        <td>   {item.price}  </td>
                        <td>   {item.quantity}  </td>
                        <td>   {item.tprice} Rupees </td>
                        <td>   {item.discount} </td>
                        <td>
                            <a  onClick={() => selectDept_click(item.name)} href="javascript:void(0);">Select</a> |
                            <a  onClick={() => deleteDept_click(item.name)} href="javascript:void(0);">Delete</a>
                        </td>
                </tr>
    });

    let tarray =[...prodsArray];
    let qa = tarray.map(e=> e.tprice);
    for(let i=0;i<tarray.length;i++)
        {
            n=n+Number(qa[i]);
        }
    return (<>

        <h3>Working with State -- CRUD Operations on Array of Objects</h3>
        <hr />

        <input type="text" placeholder="Product Name" value={name}   onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Price" value={price}   onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Quantity" value={quantity}  onChange={(e) => setQuantity(e.target.value)} />
        
        <hr />

        
        
        <input type="button" onClick={ProductButton_click} value="Add Product" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>Total Product price</th>
                <th>Discount</th>
                <th>Operation</th>
            
                    
                
            </tr>
            {resultArray}

        </table>
        <hr></hr>
        <h1>Total= {n} Rupees</h1>
        <hr></hr>



    </>);

}

export default Total;
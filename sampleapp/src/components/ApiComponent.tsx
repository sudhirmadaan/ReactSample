import { useEffect, useState } from "react";

export default function ApiComponent()
{
    const [error, setError] = useState<IError|null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<[IItem]|null>(null);

    useEffect(() => {
        fetch("https://localhost:5001/api/products")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setItems(result);
            setIsLoaded(true);
        })
        .catch(err => {
            setIsLoaded(false);
            setError(err);
        })
    }, [])

    // POST
    // fetch('https://localhost:44306/api/Employee',{
    //   method: 'POST',
    //   headers:{'Content-type':'application/json'},
    //     body: empInfo
    // }).then(r=>r.json()).then(res=>{
    //   if(res){
    //     this.setState({message:'New Employee is Created Successfully'});
    //   }
    // });

    if (error != null)
    {
        return <div>Error : {error.message}</div>
    }
    if (!isLoaded)
    {
        return <div>Loading...</div>
    }

    if (items)
    {
        
    }
    return(<ul>{items!.map(item => 
        <li key={item.id}>{item.name} {item.description} {item.price}</li>
        )}</ul>);

    interface IItem {
        id: number;
        name: string;
        description : string;
        price: number;
    }

    interface IError {
        message: string;
    }
}


const Events = () => {
   let message=""


  const handleTikla= (event)=> {
    alert("Clicked")
    console.log(event)
  }

const writeMessage = (msg)=>{
console.log(msg)
}

const changeIt = ()=>{
message = "Hi All!"
console.log(message)
}

  return (
    <div className="text-danger display-4">
      REACT EVENTS
      {/** 1. Call with referance */}
      <button className="btn btn-primary m-2 d-flex align-items-center"onClick={handleTikla}>CLICK</button>
       {/** 2. with call back function */}
     <button className="btn btn-danger m-2 d-flex align-items-center"onClick={()=>alert("DELETED")}> DELETE
     </button>
      {/** 3. Using parameters*/}

       <button className="btn btn-success" onClick={()=>writeMessage("Parameter Sent") }>Message me</button>
       <button className="btn btn-secondary m-1" onClick={changeIt}>CHANGE</button>
       <p>{message}</p>
      </div>
  )
}

export default Events





/* Onemli Notlar : */
//! message console da guncellendigini ancak DOM da guncellenmedigini gorduk : */
//* Bunun sebebi REACT in aksi belirtilmedigi surece elementleri static : */
//* olarak kabul etmesinden kaynaklanir */

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir  */
//* React a hangi elementleri interaktif oldugu belirtilmelidir */

//! React a elementlerin interaktif oldugunu belirtmek icin stateler kullanilir : */
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir */

//? ReactJS de state leri kullanmak icin 2 ayri component yapisii bulunmaktadir 
//? 1. Hooks (functional Components)
//? 2. Statefull Classes (classes components)

//? Biz su ana kadar uygulamarimizda Fonksiyonel Componentleri kullandik
//? Yaygin kullanim fonksiyonel olandir
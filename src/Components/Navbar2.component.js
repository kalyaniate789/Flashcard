import React from "react";


const Navbar = ()=> {
return(
    <div className="flex flex-col bg-orange-50	min-h-screen">
    <h1 className="ml-80 font-bold mt-6 ">Create Flashcard</h1>
     <div className="flex ">
     <p className="ml-80 mt-3 mr-7 hover:text-red-500">Create New</p>
     <p className="mt-3 hover:text-red-500">My Flashcard</p>
     </div>
   <div className="border-2 h-72 w-3/5	 ml-80 mt-6 bg-white ">
    <span className="ml-10 mt-6">Create Group</span>
   
   
    <div className="flex ">
    <select className="w-80 mt-2 ml-10 h-8 mb-3 border-2 ">
     <option>Web-3</option>
     <option>Fronted</option>
     <input/>
   
     </select>
    
   </div>
   
    <span className="w-80 mt-3 ml-10  ">Add description</span><br/>
    <input className="w-3/4 ml-9 mt-3 h-32 mt-3 border-2"/>
   
   
    
   
    </div>
    <div className="border-2 h-64 w-3/5 ml-80 mt-6 bg-white  ">  
<div className="flex">
    <p className="ml-10 mt-3">Enter Term</p> 
    <p className="ml-56 mt-3 ">Enter Defination</p>
</div>
<select className="border-2 h-8 w-64 ml-10 mt-3 ">
    <input/>
    
</select>
<select className="border-2 h-8 w-64 ml-10 mt-3 ">
    <input/>
    
</select>

  
    <div className="flex">
     <p className="ml-10 mt-14">Enter Term</p>
     <p className="ml-56 mt-14">Enter Defination</p>
     </div>
     
     <select className="border-2 h-8 w-64 ml-10 mt-3 ">
    <input/>
    
    </select>
   <select className="border-2 h-8 w-64 ml-10 mt-3 ">
    <input/>
    
     </select>
      <input type='file' className="ml-6"/> 
     
      <select className="mt-3 ml-10 text-blue-700">
      <option className="">Add more</option>
      </select>
     
   
   </div>
   <div className="text-center">
   <button className=" bg-red-500 mt-8 w-16">Create</button>
   </div>
    </div>
    
    
   )
   }

  export default Navbar;
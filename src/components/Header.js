const Header = () => {
    return(
        <div className="flex items-center justify-between p-4 bg-black text-white shadow-md">
            <div>
            <img className="w-36 h-32 ml-5" src="https://r2.erweima.ai/i/2YQT53cZR2qH6NH4lG8CBg.png" alt="logo"></img>
            </div>
            <ul class="flex space-x-20 mr-3 p-10">
                <li>
                    <a href="" class="hover:text-blue-400 font-medium">Home</a>
                </li>
                <li>
                    <a href="#" class="hover:text-blue-400 font-medium">About</a>
                </li>
                <li>
                    <a href="#" class="hover:text-blue-400 font-medium">Contact</a>
                </li>
                </ul>
            
        </div>
        
    )
}

export default Header
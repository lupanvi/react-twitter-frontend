import React, {useState} from 'react'
import { CgImage } from 'react-icons/cg'
const ImageSelection = ({setTweetImage})=>{

    const [error, setError] = useState(null)

    const handleImageSelected = (ev) =>{
        const file = takeFile(ev)
        if (!validImage(file)){
          setError(true)
          return false          
        }
        createImage(file)                                     
    } 
    const takeFile = (ev) => {
      return ev.target.files[0] || ev.dataTransfer.files[0]                
    }
    const validImage = (file)=>{       
      const allowedExtensions = ["image/png", "image/jpg", "image/jpeg", "image/gif"]      
      if (!allowedExtensions.includes(file.type)){
        return false 
      }              
      return true   
    } 
    
    const createImage = (imageFile) =>{
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)          
        reader.onload = e => {
            let image = e.target.result
            setTweetImage({
              image_file: imageFile, 
              image_src: image
            })
        }
    }     

    return (
        <div className="input_select">           
            <input           
              accept="image/*"
              type="file"
              name="file"
              id="file"              
              class="hidden"
              onChange={(ev) => handleImageSelected(ev)}         
            />
            <label for="file">        
              <CgImage className="text-2xl cursor-pointer text-twitter" /> 
            </label>
        </div>
    )
}

export default ImageSelection
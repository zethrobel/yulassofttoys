import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
function Footer(){
    let time= new Date().toLocaleDateString([],{hour:"2-digit",minute:"2-digit",hour12:true})

    return(
        <div className="footer">
          <div className="links">
          <a href="https://www.facebook.com/100087618859706/posts/267109049553055/?mibextid=rS40aB7S9Ucbxw6v"><FacebookIcon className="iconColor"/></a>  
          <a href="https://www.instagram.com/yulas_soft_toys?igsh=MWlxanlvOXpkamZqZQ=="><InstagramIcon className="iconColor" /></a>
          <a href="https://www.t.me/YulasSoftToys"><TelegramIcon className="iconColor"/></a>
          <a href="mailto:yulas.softtoys@gmail.com"><EmailIcon className="iconColor" /></a>
          </div>


     <p><LocationOnIcon /> Main Branch Hawassa, Atote Merhib Tower 1st Floor</p>
     <p><LocationOnIcon />2nd Branch Addis Ababa Bole, Celavie cross over</p>  
     <p><CallIcon /> +251989165050  or +251945836841</p>   
        <p>copyright © yulassofttoys, {time}</p>

        <div className="rob" >
          <p>by <a className="developer" href="https://github.com/zethrobel">robelZeleke</a></p>
        </div>
        </div>

      
    )
}

export default Footer
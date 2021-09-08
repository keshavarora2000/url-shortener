import React from "react"
import spinner from './spinner.gif'
import link from './link.svg'

  
const Found = (props) => {

    if(props.start) {
        if(props.found) {
            return (
                <div className="found">
                    <div className="short-link-input">
                        {props.shortLink}
                    </div>
                    <div className="copy-icon">
                        <img src={link} alt="link icon"/>
                    </div>
                </div> 
            )
        } 
            else {
                return (
                    <div className="not-found">
                        <img src={spinner} alt="loading..."/>
                    </div>
                )
            }
    }


}

export default Found
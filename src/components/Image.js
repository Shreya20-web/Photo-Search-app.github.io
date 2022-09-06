import React from 'react'

// class Image extends React.Component{
//     render(){
//         return(
//             <img src={this.props.src}/>
//         )
//     }
// }

const Image = (props) => {
    return(
        <>
        
            <img src={props.src} alt={props}/>
        
        </>
    )
    
}

export default Image;

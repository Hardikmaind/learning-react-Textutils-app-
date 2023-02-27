import React from 'react'

export default function Alert(props) {
    // this funtion capitalizes the first word
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        // this will set the height of the alert bar so that CLS{commulative layout shift} doesn't happen 
        <div style={{height:'50px'}}>

        
        {/* when we use the "&&" in the JS so what will happen know?..whatever written before it will get evaluated. if that  gets false or null then whatever written after "&&" will not get evaluated. And if the whatever written before it gets true then whatever written after it will also get evaluated. */ }
        {/* so here when props.alert_message gets evaluated then later part after '&&' (i.e div) will get returned. and if the props.alert_message is null the later div will not get returned .So basically it is saying if props.alert_message is not null do the later part. */ }
        {/* this happens beacus all the JSX will be converted to javascript calls */ }
        {props.alert_message && <div>
            {/* here we have added the props.alert_message.type so that it gives the green color,i.e its type */}
            <div className={`alert alert-${props.alert_message.type} alert-dismissible fade show`} role="alert">
                {/* props.alert_message.type/msg  in this way we passed the keys of object alert/setAlert in Alert .js. see*/}
                <strong>{capitalize(props.alert_message.type)}</strong>: {props.alert_message.msg}
                {/*commentd the cross button below */}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>}
        </div>
    )
}

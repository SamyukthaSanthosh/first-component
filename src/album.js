export const Body=()=>{
    return(<>
    <Albumbody/>
    </>);
};

const Albumbody=()=>{
    return(
    <div>
        <Example/>
    </div> 
        )
}

const Example=()=>{
    return(
        <div className="example">
    <Album/>
    <Para/>
        <Button/>
        </div>
    )
}

const Album=()=>{
    return(
        <div>
            <h1>Album example</h1>
        </div>
    )
}

const Para=()=>{
    return(
<div className="para">
<p>Something short and leading about the collection below—its contents, the creator, etc. 
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
</div>)
}

const Button=()=>{
    return(
        <div className="button">
        <Mainbutton/>
        <Secondarybutton/>
        </div>
    )
}

const Mainbutton=()=>{
    return(
        <div className='mainaction'>
            <span>Main call to action</span>
        </div>
    )
}

const Secondarybutton=()=>{
    return(
        <div className='secondaryaction'>
            <span>Secondary action</span>
        </div>
    )
}
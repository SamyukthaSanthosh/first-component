export const Body=()=>{
    return(<>
    <Albumbody/>
    </>);
};

const Albumbody=()=>{
    return(
    <div className="example">
      <h1>Album example</h1>
      <p>Something short and leading about the collection below—its contents, the creator, etc. 
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <div className="button">
        <Mainbutton/>
        <Secondarybutton/>
        </div>
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
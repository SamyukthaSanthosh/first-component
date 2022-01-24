export const Thumbnails=()=>{
    return(<>
    <Albumthumbnail/>
    </>);
};

const Albumthumbnail=()=>{
    return(<><div className="total">
    <div className="total1">
          <Albumthumbnail1/>
          <Albumthumbnail2/>
          <Albumthumbnail3/>
    </div>
    <div className="total2">
    <Albumthumbnail4/>
    <Albumthumbnail5/>
    <Albumthumbnail6/>
    </div>
    <div className="total3">
    <Albumthumbnail7/>
    <Albumthumbnail8/>
    <Albumthumbnail9/> 
    </div>
    </div>
    </>);
}

const Albumthumbnail1=()=>{
    return(<>
    <div className="one">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail2=()=>{
    return(<>
    <div className="two">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail3=()=>{
    return(<>
    <div className="three">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail4=()=>{
    return(<>
    <div className="four">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail5=()=>{
    return(<>
    <div className="five">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail6=()=>{
    return(<>
    <div className="six">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail7=()=>{
    return(<>
    <div className="seven">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail8=()=>{
    return(<>
    <div className="eight">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Albumthumbnail9=()=>{
    return(<>
    <div className="nine">
          <Photo/>
        <Para/>
        <div className="viewandedit">
        <View/>
        <Edit/>
        </div>
    </div>
    </>);
}

const Photo=()=>{
    return(<>
    <div className="photo">
        <h2>Thumbnail</h2>
    </div>
    </>);
}

const Para=()=>{
    return(<>
    <div className="para">
        <p>This is a wider card with supporting text below as a natural lead-in to additional content. 
        This content is a little bit longer.</p>
    </div>
    </>);
}

const View=()=>{
    return(<>
    <div className="view">
        <span>View</span>
    </div>
    </>);
}

const Edit=()=>{
    return(<>
    <div className="edit">
        <span>Edit</span>
    </div>
    </>);
}
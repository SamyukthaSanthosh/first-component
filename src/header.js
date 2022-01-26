export const Header=()=>{
    return(<>
    <Albumheader/>
    </>);
};

const Albumheader=()=>{
    return React.createElement(
        'div className="album"', {},
    React.createElement('h2', {}, 'Album')
        );
}
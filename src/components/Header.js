

const Header = () => {
  // returning some html/JSX 
  return (
    <div>
      {/* we must only have one parent div | we can multiple chil div */}
      {/* we can just use a fragment <></> without having anything like div that will also work */}

      <h1>
        My Header
      </h1>
      
    </div>
  )
}

export default Header;
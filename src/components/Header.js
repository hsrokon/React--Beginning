

const Header = () => {
  // returning some html/JSX 
  return (
    <div className="app-header">
      {/* we must only have one parent div | we can multiple chil div */}
      {/* we can just use a fragment <></> without having anything like div that will also work */}

      <h1>
        Notes List
      </h1>
      
    </div>
  )
}

export default Header;
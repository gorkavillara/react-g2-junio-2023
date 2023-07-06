import NavBar from "./components/NavBar"

const Bootstrap = () => {
  return (
    <>
      <NavBar />
      <div className="p-4">
        <div className="row gap-2">
          <div className="col">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bootstrap

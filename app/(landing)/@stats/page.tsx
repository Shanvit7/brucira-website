const Stats = () => (
  <>
    <div className="flex items-center gap-4 py-6">
      <hr className="border-1 border-primary w-12" />
      <b className="uppercase text-primary text-xl font-semibold">
        We are global
      </b>
    </div>

    <div className="grid grid-cols-1 font-everett text-center space-y-20 lg:grid-cols-4 lg:text-start lg:space-y-0">
      <div className="col-span-1 font-everett font-medium space-y-2">
        <strong className="text-7xl">
          60
          <span className="text-primary">+</span>
        </strong>
        <p className="text-2xl">
          brands
          <br />
          partnered with
        </p>
      </div>

      <div className="col-span-1 font-everett font-medium space-y-2">
        <strong className="text-7xl">
          3K
          <span className="text-primary">+</span>
        </strong>
        <p className="text-2xl">
          brand content
          <br />
          assets created
        </p>
      </div>

      <div className="col-span-1 font-everett font-medium space-y-2">
        <strong className="text-7xl">
          1K
          <span className="text-primary">+</span>
        </strong>
        <p className="text-2xl">
          global partners and
          <br />
          collaborators
        </p>
      </div>

      <div className="col-span-1 space-y-2">
        <strong className="text-7xl font-ttcommons font-medium">
          100
          <span className="text-primary">+</span>
        </strong>
        <p className="text-2xl font-everett font-medium">
          cities
          <br />
          worldwide
        </p>
      </div>
    </div>
  </>
);

export default Stats;

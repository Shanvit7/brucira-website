const Stats = () => (
  <>
    <div className="flex items-center gap-4 py-6 font-everett">
      <hr className="border-1 border-primary w-12" />
      <b className="uppercase text-primary font-bold">We are global</b>
    </div>

    <div className="grid grid-cols-4 font-everett">

      <div className="col-span-1">
        <strong className="text-6xl font-bold">
          60
          <span className="text-primary">+</span>
        </strong>
        <p className="leading-tight font-semibold">brands</p>
        <p className="leading-tight font-semibold">partnered with</p>
      </div>

      <div className="col-span-1 ">
        <strong className="text-6xl font-bold">
          3K
          <span className="text-primary">+</span>
        </strong>
        <p className="leading-tight font-semibold">brand content</p>
        <p className="leading-tight font-semibold">assets created</p>
      </div>

      <div className="col-span-1 ">
        <strong className="text-6xl font-extrabold">
          1K
          <span className="text-primary">+</span>
        </strong>
        <p className="leading-tight font-semibold">global partners and</p>
        <p className="leading-tight font-semibold">collaborators</p>
      </div>

      <div className="col-span-1 ">
        <strong className="text-6xl font-bold">
          100
          <span className="text-primary">+</span>
        </strong>
        <p className="leading-tight font-semibold">cities</p>
        <p className="leading-tight font-semibold">worldwide</p>
      </div>
    </div>
  </>
);

export default Stats;

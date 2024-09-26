const Links = () => (
  <div className="">
    <div className="grid grid-cols-5">
      <div className="col-span-1 space-y-6">
        <h3 className="uppercase font-everett font-medium text-2xl">Company</h3>
        <ul className="text-lg">
          <ol>Who Are We</ol>
        </ul>
      </div>

      <div className="col-span-1 space-y-6">
        <h3 className="uppercase font-everett font-medium text-2xl">
          Resources
        </h3>
        <ul className="text-lg">
          <ol>Blog</ol>
        </ul>
      </div>

      <div className="col-span-1 space-y-6">
        <h3 className="uppercase font-everett font-medium text-2xl">Work</h3>
        <ul className="text-lg space-y-6">
          <ol>Video</ol>
          <ol>Shoot</ol>
          <ol>Post</ol>
        </ul>
      </div>

      <div className="col-span-1 space-y-6">
        <h3 className="uppercase font-everett font-medium text-2xl">
          Services
        </h3>
        <ul className="text-lg space-y-6">
          <ol>Video</ol>
          <ol>Shoot</ol>
          <ol>Post</ol>
        </ul>
      </div>

      <div className="col-span-1 space-y-6">
        <h3 className="uppercase font-everett font-medium text-2xl">Contact</h3>
        <ul className="text-lg space-y-6">
          <ol>Talk to us</ol>
          <ol>Collab</ol>
        </ul>
      </div>
    </div>

    <hr className="text-grey-200 mt-20 mb-8" />
    <div className="flex items-center justify-between text-base">
      <p>Copyright ©2023 Red Bangle</p>
      <div className="inline-flex items-center gap-8">
        <p>Privacy Policy</p>
        <p>Legal</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  </div>
);

export default Links;

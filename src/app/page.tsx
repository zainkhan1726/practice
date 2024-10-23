export default function Home(){
  return (
    <div className="bg-white h-screen flex items-center px-5">
      <div className="flex flex-col gap-4 justify-center w-1/2 h-48 px-5">
        <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
        <p className="text-neutral-700 font-normal text-[32px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
        <button className=" bg-black text-white font-normal p-4 text-[28px] w-[237px] h-[70px]">
          Contact US
        </button>
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/4148/07e3/5071d41f80ee889a16dd9ca2c1eb5e9e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRoh4pebBTVy06rU~gfrp9smRTFYGRw38pXohd6q~1ulQtkZs3U2li28ocxgaaPnK0gEYvcrrV~z-XjyEWFmN~Q8E693PuW2sLED842NfxQUrqaQvnA99K6r1TW~Pv3EKuo0H~Yp3vXed7-tgCSXEF1rX9XcipHT4XtmcFIF-Rqe8tKeVn5oqAQnA59tG-Ez2Anh9mFIdaY9nHBGClQG5pRVUSC-CbJwfsselme8DLwY9xzkviLQcdco1RjAPZajvEAmLxWjcH9tv7Ob4C9CS06QjGcLcVlKY9es02UxCagCE0LEGJIfqIEsc2AFgJBA9dRshHlpDkzidjdDmfUqAg__"
          alt="Black image" width={502} height={465}
        />
      </div>
    </div>
  );
}
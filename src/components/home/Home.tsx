const Home = () => (
    <>
        <div className="flex flex-col">
            <p>Hi, my name is</p>
            <h2 className="bg-gradient-to-r text-transparent from-ctp-green to-ctp-mauve bg-clip-text text-1xl sm:text-2xl">Vedant Wankhade</h2>
            <p>I am a</p>
            <h1 className="py-2 font-maple text-3xl sm:text-6xl font-bold bg-gradient-to-r text-transparent from-ctp-pink to-ctp-flamingo bg-clip-text">Software Engineer</h1>
            <div className="max-w-sm sm:max-w-xl">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus sunt quidem hic dolorem totam quam odit provident aliquam laudantium accusantium, nihil minus eaque, similique aspernatur, iure dolorum perferendis? Ratione?</p>
            </div>
        </div>
        <div className="hidden sm:block">
            <img className="rounded-full max-w-xs" src="/imgs/me.jpeg" alt="my profile photo" />
        </div>
    </>
)
export default Home

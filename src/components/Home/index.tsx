const Home = () => {
    const randomNumber = Math.floor(Math.random() * (2011 - 800 + 1)) + 800;
    const today = new Date().toLocaleDateString(); // Format the date as 'MM/DD/YYYY' or according to locale

    return (
        <div className="Home">
            <h1><center>美女是嘛，我想每个人都一样... ...</center></h1>
            <br></br>
            <h3>机器人抓取🧚AI分类➿日更不辍🥰日日常新</h3>
            <h4>{today} 美女更新：<span style={{ color: 'red' }}>{randomNumber}</span></h4>
            <img src="/gallery/home/zhang3.gif" alt="Italian Trulli" />
            <img src="/gallery/home/zhang2.gif" alt="Italian Trulli" />
            <img src="/gallery/home/zhang4.gif" alt="Italian Trulli" />
            <footer>
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="mailto:omnidevx@gmail.com">Contact</a>                        
                        <a href="/privacypolicy.html" target="_blank" rel="noopener noreferrer">Privacy</a>
                        | Copyright © 2024. aiDres.com All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
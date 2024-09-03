// Navigate.tsx
import { useState } from 'react'
import { Link, Outlet, } from "react-router-dom";

export default function Navigate() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div id="root">
            <div id="sidebar" className={isSidebarOpen ? 'open' : 'closed'}>
                <h1>OmniDevX</h1>
                <nav>
                    <h2><Link to={`/`}> 爱书 📚 aiBooksHub </Link></h2>
                    <ul>
                        <li><Link to="#" onClick={() => toggleMenu('ycc')} className="menu-item" >
                                {openMenu === 'ycc' ? '▼ 中小学辅导资料【合集】' : '▶ 👩‍🎓中小学辅导资料【合集】'}
                            </Link>

                            {openMenu === 'ycc' && (
                                <ul className="submenu">
                                    <li><Link to={`/yangchenchen1/new`}>👙Yome杨晨晨最近更新</Link></li>
                                    <li><Link to={`/yangchenchen2/work`}>👙Yome杨晨晨在work</Link></li>
                                    <li><Link to={`/yangchenchen3/happy`}>👙Yome杨晨晨在happy</Link></li>
                                    <li><Link to={`/yangchenchen4/me`}>👙Yome杨晨晨最美瞬间</Link></li>
                                    <li><Link to={`/yangchenchen5/shunv`}>👙Yome杨晨晨淑女范</Link></li>
                                    <li><Link to={`/yangchenchen6/pure`}>👙Yome杨晨晨又纯又欲</Link></li>
                                    <li><Link to={`/yangchenchen7/sa`}>👙Yome杨晨晨又美又飒</Link></li>
                                    <li><Link to={`/yangchenchen8/xindongyike`}>👙Yome杨晨晨心动一刻</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="#" onClick={() => toggleMenu('wxy')} className="menu-item">
                                {openMenu === 'wxy' ? '▼ 法语' : '▶  🥐法语'}
                            </Link>

                            {openMenu === 'wxy' && (
                                <ul className="submenu">
                                    <li><Link to={`/wangxinyao1/sexy`}>💄王馨瑶Yanni性感</Link></li>
                                    <li><Link to={`/wangxinyao2/pure`}>💄王馨瑶Yanni纯真</Link></li>
                                    <li><Link to={`/wangxinyao3/jujia`}>💄王馨瑶Yanni居家</Link></li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="#" onClick={() => toggleMenu('syz')} className="menu-item">
                                {openMenu === 'syz' ? '▼ 孙允珠' : '▶  👠 孙允珠'}
                            </Link>

                            {openMenu === 'syz' && (
                                <ul className="submenu">
                                    <li><Link to={`/sunyunzhu/professional`}>👠孙允珠 职业装</Link></li>
                                    <li><Link to={`/sunyunzhu/jujia`}>👠孙允珠 居家服</Link></li>
                                    <li><Link to={`/sunyunzhu/show`}>👠孙允珠 走秀</Link></li>
                                </ul>
                            )}
                        </li>


                        <li><Link to={`/anran`}>🎀安然An Ran</Link></li>
                        <li><Link to={`/chengchengcheng`}>💃程程程</Link></li>
                        <li><Link to={`/duxiaoyu`}>💌杜小雨</Link></li>
                        <li><Link to={`/vicky_kele`}>👢可乐Vicky</Link></li>
                        <li><Link to={`/xulizhi`}>👒徐莉芝Booty</Link></li>
                        <li><Link to={`/linxinglan`}>📍林星阑</Link></li>
                        <li><Link to={`/elegant`}>🎒精致妆容</Link></li>
                        <li><Link to={`/celebrities`}>🎖️明星</Link></li>
                        <li><Link to={`/fengman`}>🤹‍♀️肉肉</Link></li>
                        <li><Link to={`/liangjia`}>👩‍❤️‍👨良家邻里</Link></li>
                        <li><Link to={`/back`}>👁️美背美腿美其他</Link></li>

                        <li><Link to="#" onClick={() => toggleMenu('model')} className="menu-item">
                                {openMenu === 'model' ? '▼ 网红模特' : '▶  💃网红模特'}
                            </Link>

                            {openMenu === 'model' && (
                                <ul className="submenu">
                                    <li><Link to={`/model/sexy`}>💃模特</Link></li>
                                    <li><Link to={`/model/pure`}>💃网红</Link></li>
                                </ul>
                            )}
                        </li>


                        <li><Link to={`/ai`}>☸️AI</Link></li>
                        <li><Link to={`/arts`}>🖼️艺术</Link></li>
                        <li><Link to={`/zhiyuxi`}>🌴治愈系</Link></li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <button className="toggle-button" onClick={toggleSidebar}>
                <svg width="30" height="26" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h17v2H4V6zM4 11h17v2H4V11zM4 16h17v2H4V16z" fill="#aaa" />
                </svg>
            </button>
        </div>
    );
}

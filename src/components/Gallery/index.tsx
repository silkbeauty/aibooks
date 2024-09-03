// https://blog.csdn.net/qq_43477721/article/details/108440455?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-108440455-blog-104859308.235^v43^pc_blog_bottom_relevance_base8&spm=1001.2101.3001.4242.2&utm_relevant_index=2
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col, Modal } from 'antd';
import { shuffleArray, chunkArray } from '../../utils/ArrayUtilities.tsx';


const Gallery: React.FC = () => {
    console.log('ddd')
    const [visible, setVisible] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    // const [imgs, setImgs] = useState<string[][]>([]);
    const [imgs, setImgs] = useState<{ src: string; mood: string; }[][]>([]);

    const [loading, setLoading] = useState(true); // Loading state

    const { model, mood = "" } = useParams(); // Destructure model and optional mood

    // Use model and mood to construct gallery path or access other parameters
    const galleryPath = `/gallery/${model}/`;
    // const moodOptions = ["开心", "兴奋", "甜美", "安静", "迷人"]; 

    async function fetchMoodOptions(): Promise<string[]> {
        const response = await fetch('/captions.txt');
        const text = await response.text();
        return text.split('\n').filter(line => line.trim() !== '');
    }


    // function getRandomMood() {
    //     return moodOptions[Math.floor(Math.random() * moodOptions.length)];
    // }
    
    useEffect(() => {
        async function loadFileList() {
            try {

                const module = await import(`./filelist_${model}.tsx`);
                
                const { fileListArray } = module;
                const shuffledArray = shuffleArray(fileListArray)  as string[];
                const pickedItems = shuffledArray.slice(0, 40);
                const groupedImgs = chunkArray(pickedItems, 15) as string[][];

                const moodOptions = await fetchMoodOptions();

                setImgs(groupedImgs.map(group => 
                    group.map(img => ({
                        src: img,
                        mood: moodOptions[Math.floor(Math.random() * moodOptions.length)]
                    }))
                ));

                // setImgs(groupedImgs);
                setLoading(false); // Set loading to false once data is loaded
            } catch (error) {
                console.error("Failed to load file list array:", error);
                setLoading(false);
            }
        }

        loadFileList();
    }, [model, mood]);

    console.log(imgs)
    console.log(galleryPath)

    const openGallery = (imgSrc: any) => {
        setCurrentImg(`${galleryPath}${imgSrc}`);
        setVisible(true);
    };

    if (loading) {
        return <div>Loading...</div>; // Optionally show a loading spinner or message
    }

    const imgList = imgs.map(group =>
        group.map(({ src, mood }) => (
            <Card
                key={src}
                style={{ marginBottom: 10 }}
                cover={<img src={galleryPath + src} onClick={() => openGallery(src)} />}
            >
                <Card.Meta title="爱黑丝💓aiDres" description={mood} />
            </Card>
        ))
    );

    // const imgList = imgs.map((list) =>
    //     list.map((item) => (
    //         <Card
    //             key={item}
    //             style={{ marginBottom: 10 }}
    //             cover={<img src={galleryPath + item} onClick={() => openGallery(item)} />}
    //         >
    //             <Card.Meta title="爱黑丝💓aiDres" description={getRandomMood()} />
    //         </Card>
    //     ))
    // );

    return (
        <div className="card-wrap">
            <Row gutter={6}>
                <Col md={12}>{imgList[0]}</Col>
                <Col md={12}>{imgList[1]}</Col>
                {/* <Col md={8}>{imgList[2]}</Col> */}
            </Row>
            <Modal
                open={visible}
                title="原质下载original quality download"
                onCancel={() => setVisible(false)}
                footer={'收藏，日更'}
            >
                {<img src={currentImg} alt="" style={{ width: '100%' }} />}
            </Modal>
        </div>
    );
};

export default Gallery;

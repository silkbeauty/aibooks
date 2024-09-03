// https://blog.csdn.net/qq_43477721/article/details/108440455?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-108440455-blog-104859308.235^v43^pc_blog_bottom_relevance_base8&spm=1001.2101.3001.4242.2&utm_relevant_index=2
import { useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';

interface GalleryProps {
    galleryPath: string;
}

const Gallery: React.FC<GalleryProps> = ({ galleryPath }) => {
    const [visible, setVisible] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    const [imgs, setImgs] = useState<string[][]>([]);

    const textFilePath = `${galleryPath}f.txt`;

    const openGallery = (imgSrc: any) => {
        setCurrentImg(`${galleryPath}${imgSrc}`);
        setVisible(true);
    };

    useEffect(() => {
        fetch(textFilePath) // Replace with your actual endpoint
            .then(response => response.text())
            .then(data => {
                const fileNames = data.split('\n').map(line => line.trim()).filter(line => line);
                const chunkedImgs: any = chunkArray(fileNames, 20); // Implement chunkArray function
                setImgs(chunkedImgs);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [textFilePath]);

    const chunkArray = (array: any, chunkSize: any) => {
        const results = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            results.push(array.slice(i, i + chunkSize));
        }
        return results;
    };

    console.log("------------------")
    console.log(imgs)
    console.log(typeof(imgs))

    // Function to group array elements into subarrays of a specified size
    const groupIntoSubarrays = (arr: string[], size: number): string[][] => {
        const result: string[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    console.log(groupIntoSubarrays)


    const imgList = imgs.map((list) =>
        list.map((item) => (
            <Card
                key={item}
                style={{ marginBottom: 10 }}
                cover={<img src={galleryPath + item} onClick={() => openGallery(item)} />}
            >
                <Card.Meta title="美女如丝" description="I Love Meinv" />
            </Card>
        ))
    );

    console.log(imgList)

    return (
        <div className="card-wrap">
            <Row gutter={6}>
                <Col md={8}>{imgList[0]}</Col>
                <Col md={8}>{imgList[1]}</Col>
                <Col md={8}>{imgList[2]}</Col>
                <Col md={8}>{imgList[3]}</Col>
                <Col md={8}>{imgList[4]}</Col>
                <Col md={8}>{imgList[5]}</Col>
                <Col md={8}>{imgList[6]}</Col>
                <Col md={8}>{imgList[7]}</Col>
                <Col md={8}>{imgList[8]}</Col>
                <Col md={8}>{imgList[9]}</Col>
                <Col md={8}>{imgList[10]}</Col>
                <Col md={8}>{imgList[11]}</Col>
                <Col md={8}>{imgList[12]}</Col>
                <Col md={8}>{imgList[13]}</Col>
                <Col md={8}>{imgList[14]}</Col>
                <Col md={8}>{imgList[15]}</Col>
                <Col md={8}>{imgList[16]}</Col>
                <Col md={8}>{imgList[17]}</Col>
                <Col md={8}>{imgList[18]}</Col>
                <Col md={8}>{imgList[19]}</Col>
                <Col md={8}>{imgList[20]}</Col>
                <Col md={8}>{imgList[21]}</Col>
                <Col md={8}>{imgList[22]}</Col>
                <Col md={8}>{imgList[23]}</Col>
                <Col md={8}>{imgList[24]}</Col>
                <Col md={8}>{imgList[25]}</Col>
                <Col md={8}>{imgList[26]}</Col>
                <Col md={8}>{imgList[27]}</Col>
                <Col md={8}>{imgList[28]}</Col>
                <Col md={8}>{imgList[29]}</Col>
                <Col md={8}>{imgList[30]}</Col>
                <Col md={8}>{imgList[31]}</Col>
                <Col md={8}>{imgList[32]}</Col>
                <Col md={8}>{imgList[33]}</Col>
                <Col md={8}>{imgList[34]}</Col>
                <Col md={8}>{imgList[35]}</Col>
                <Col md={8}>{imgList[36]}</Col>
                <Col md={8}>{imgList[37]}</Col>
                <Col md={8}>{imgList[38]}</Col>
                <Col md={8}>{imgList[39]}</Col>
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

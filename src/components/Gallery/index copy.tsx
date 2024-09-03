// https://blog.csdn.net/qq_43477721/article/details/108440455?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-108440455-blog-104859308.235^v43^pc_blog_bottom_relevance_base8&spm=1001.2101.3001.4242.2&utm_relevant_index=2
import { useState, useEffect } from 'react';
import { Card, Row, Col, Modal } from 'antd';

const Gallery = () => {
    const [visible, setVisible] = useState(false);
    const [currentImg, setCurrentImg] = useState('');
    const textFilePath = '/gallery/cell1/fileList.txt';
    const [imgs, setImgs] = useState<string[][]>([]);

    const openGallery = (imgSrc: any) => {
        setCurrentImg('/gallery/cell1/' + imgSrc);
        setVisible(true);
    };

    useEffect(() => {
      fetch(textFilePath) // Replace with your actual endpoint
        .then(response => response.text())
        .then(data => {
          const fileNames = data.split('\n').map(line => line.trim()).filter(line => line);
          const chunkedImgs: any = chunkArray(fileNames, 5); // Implement chunkArray function
          setImgs(chunkedImgs);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    const chunkArray = (array:any , chunkSize: any) => {
      const results = [];
      for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
      }
      return results;
    };

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
                cover={<img src={'/gallery/cell1/' + item} onClick={() => openGallery(item)} />}
            >
                <Card.Meta title="React Admin" description="I Love Imooc" />
            </Card>
        ))
    );

    return (
        <div className="card-wrap">
            <Row gutter={10}>
                <Col md={5}>{imgList[0]}</Col>
                <Col md={5}>{imgList[1]}</Col>
                <Col md={5}>{imgList[2]}</Col>
                <Col md={5}>{imgList[3]}</Col>
                <Col md={4}>{imgList[4]}</Col>
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

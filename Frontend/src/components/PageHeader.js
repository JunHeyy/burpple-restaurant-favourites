import { Typography } from 'antd';
import ThumbsUp from './animation/ThumbsUp';
import { Row, Col, Card } from "antd";
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  image: { width: '65px', height: '65px', objectFit: 'cover', borderRadius: '50%' },
  textContainer: {
    marginTop: '15px',
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Aligns children at the start
    alignItems: 'start',
  },
  title: {
    fontSize: '25px',
    justifyContent: 'start',
    alignItems: 'start',
    margin: 0, // Remove default margin for consistent alignment
  },
  subtitle: {
    fontSize: '16px',
    marginTop: '6px',
    justifyContent: 'center',
    alignItems: 'start',
    padding: '10px',
    color: '#999', // Set the text color to #999
    margin: 0,
  },
};

const PageHeader = () => {

  return (
    <Row>
      <Col>
        <Row>
          {/* <img
            src="https://burpple-image.burpple.com/users/70810898d979fc06118625_original.?w=280&h=280&fit=crop&q=80&auto=format"
            alt="Header Image"
            style={styles.image} // Adjust as needed
          /> */}
          <ThumbsUp />
          <Col style={styles.textContainer}>
            <h1 style={styles.title}> Your Burpple Favourites in Singapore</h1>
            <span style={styles.subtitle}> Find out what others have to say about your favourites</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PageHeader;

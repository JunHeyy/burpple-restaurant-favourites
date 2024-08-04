import React from 'react';
import { timeAgo } from '../utils/TimeHelper';
// import { RestaurantReview } from '../types/RestaurantReview'; // Adjust the import path as needed

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '175px', // Adjust to match the image size
        height: 'auto',
        marginBottom: '20px',
        boxSizing: 'border-box',
        border: '0.5px solid #ccc', // Grey border
        borderRadius: '8px', // Rounded corners for the container
        padding: '10px', // Optional: add padding inside the container
    },
    image: {
        width: '175px', // Set width to 175px
        height: '175px', // Set height to 175px
        borderRadius: '8px', // Rounded corners for the image
        objectFit: 'cover', // Ensure the image covers the box without distortion
        marginBottom: '10px', // Space below the image
    },
    review: {
        margin: '10px 0', // Space around the review text
        fontSize: '12px', // Adjust font size as needed
        textAlign: 'start', // Center align the review text
        overflow: 'visible', // Ensure text is visible
        wordWrap: 'break-word', // Allow words to break onto the next line
        overflowWrap: 'break-word', // Handle overflow in browsers that support it
        whiteSpace: 'normal', // Allow text to wrap
    },
    userInfoContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%', // Make sure user info spans the full width
        maxHeight: '100px', // Correct property name and value
        fontSize: '10px',
        color: '#555',
        marginTop: '5px',
    },
    username: {
        fontWeight: 'bold',
        flexShrink: 0, // Prevent shrinking
    },
    spacer: {
        flexGrow: 1, // Take up remaining space
    },
    date: {
        fontStyle: 'italic',
        flexShrink: 0, // Prevent shrinking
    }
};

const ReviewItem = ({ review }) => {
    const { picture, review: reviewText, username, datePost } = review;

    const formattedDate = timeAgo(datePost); // Use the timeAgo function to format the date

    return (
        <div style={styles.container}>
            <img src={`${process.env.PUBLIC_URL}${picture}`} alt="Review" style={styles.image} />
            <p style={styles.review}>{reviewText}</p>
            <div style={styles.userInfoContainer}>
                <span style={styles.username}>{username}</span>
                <div style={styles.spacer} />
                <span style={styles.date}>{formattedDate}</span>
            </div>
        </div>
    );
};

export default ReviewItem;

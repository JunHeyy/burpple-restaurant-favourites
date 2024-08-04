import React, { useState, useRef } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import ReviewItem from './ReviewItem';
import { seedReviews } from '../data/ReviewData';
// import { Restaurant } from '../types/Restaurant'; // Adjust the import path as needed

const { Option } = Select;

// Define styles in a separate object
const styles = {
    container: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'left',
        width: '100%',
        height: '100%',
        maxWidth: '450px',
        boxSizing: 'border-box',
        position: 'relative', // Position relative for the edit button
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between', // Distribute space between items
        alignItems: 'center', // Center items vertically
        marginBottom: '10px' // Space below the header
    },
    restaurantName: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    reviewCount: {
        color: 'rgb(237,178,95)',
        marginBottom: '5px'
    },
    details: {
        marginBottom: '5px'
    },
    cuisine: {
        color: 'rgb(168,168,168)'
    },
    reviewContainerWrapper: {
        position: 'relative', // Allow absolute positioning for chevrons
        marginTop: '10px',
        overflow: 'hidden', // Hide overflow to show only visible items
    },
    reviewContainer: {
        display: 'flex', // Align items horizontally
        overflowX: 'auto', // Enable horizontal scrolling
        whiteSpace: 'nowrap', // Prevent line breaks in reviews
        scrollBehavior: 'smooth' // Smooth scrolling
    },
    reviewItem: {
        display: 'inline-block', // Allow horizontal alignment of items
        marginRight: '20px', // Space between reviews
        flex: '0 0 auto', // Prevent items from stretching
        padding: '10px' // Padding around each review
    },
    chevron: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '35px',
        color: '#000', // Set color to black
        cursor: 'pointer',
        zIndex: 1
    },
    chevronLeft: {
        left: '10px',
    },
    chevronRight: {
        right: '10px',
    },
    editButton: {
        fontSize: '20px',
        color: '#EA246E',
        cursor: 'pointer',
    },
    deleteButton: {
        marginLeft: '20px',
        fontSize: '20px',
        color: '#EA246E',
        cursor: 'pointer',
    }
};

const RestaurantItem = ({ restaurant, onEdit, onDelete }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm(); // Ant Design form instance
    const reviewContainerRef = useRef(null); // Ref to access the review container

    // Function to get a random subset of reviews
    const getRandomReviews = (reviews, min, max) => {
        // Shuffle the reviews array
        const shuffled = reviews.sort(() => 0.5 - Math.random());
        // Select a random number of reviews between min and max
        const sliceEnd = Math.floor(Math.random() * (max - min + 1)) + min;
        return shuffled.slice(0, sliceEnd);
    };

    const scrollLeft = () => {
        if (reviewContainerRef.current) {
            reviewContainerRef.current.scrollBy({
                left: -200, // Adjust this value as needed
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (reviewContainerRef.current) {
            reviewContainerRef.current.scrollBy({
                left: 200, // Adjust this value as needed
                behavior: 'smooth'
            });
        }
    };

    const handleEditClick = () => {
        form.setFieldsValue(restaurant); // Set form values to current restaurant data
        setModalVisible(true); // Show the modal
    };

    const handleModalEditOk = () => {
        form
            .validateFields()
            .then((values) => {
                // Call On Edit with the form values
                onEdit({ ...restaurant, ...values });
                console.log('Updated values:', { ...restaurant, ...values });
                setModalVisible(false); // Hide the modal
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleDeleteClick = () => {
        // Confirm deletion before calling onDelete
        Modal.confirm({
            title: 'Are you sure you want to delete this restaurant?',
            okText: 'Delete',
            cancelText: 'Cancel',
            onOk: () => onDelete(restaurant.id)
        });
    };

    const randomReviews = getRandomReviews(seedReviews, 3, 8); // Get 3 to 8 random reviews

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.restaurantName}>
                    {restaurant.name}
                </div>
                <div style={styles.buttonContainer}>
                    <EditOutlined style={styles.editButton} onClick={handleEditClick} />
                    <DeleteOutlined style={styles.deleteButton} onClick={handleDeleteClick} />
                </div>
            </div>

            <div style={styles.reviewCount}>
                {restaurant.numOfReviews} Reviews
            </div>
            <div style={styles.details}>
                {restaurant.location} · {restaurant.cost}
            </div>
            <div style={styles.cuisine}>
                {restaurant.cuisine}
            </div>
            <div style={styles.reviewContainerWrapper}>
                <span style={{ ...styles.chevron, ...styles.chevronLeft }} onClick={scrollLeft}>‹</span>
                <div ref={reviewContainerRef} style={styles.reviewContainer}>
                    {randomReviews.map((review, index) => (
                        <div key={index} style={styles.reviewItem}>
                            <ReviewItem review={review} />
                        </div>
                    ))}
                </div>
                <span style={{ ...styles.chevron, ...styles.chevronRight }} onClick={scrollRight}>›</span>
            </div>

            {/* Modal for editing restaurant */}
            <Modal
                title="Edit Restaurant"
                visible={modalVisible}
                onOk={handleModalEditOk}
                onCancel={() => setModalVisible(false)}
                okText="Save"
                cancelText="Cancel"
            >
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please input the restaurant name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="location"
                        label="Location"
                        rules={[{ required: true, message: 'Please input the location!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="cuisine"
                        label="Cuisine"
                        rules={[{ required: true, message: 'Please select the cuisine!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="cost"
                        label="Cost"
                        rules={[{ required: true, message: 'Please select the cost!' }]}
                    >
                        <Select>
                            <Option value="$">$</Option>
                            <Option value="$$">$$</Option>
                            <Option value="$$$">$$$</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default RestaurantItem;
